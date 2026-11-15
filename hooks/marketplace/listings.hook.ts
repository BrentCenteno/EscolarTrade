import "server-only";

import { adminDb } from "@/lib/firebase-admin";
import { requireSession } from "@/lib/auth/session";
import {
  ListingSchema,
  ListingWithLikeStateSchema,
} from "@/schemas/listing.schema";

export async function getListings() {
  const { uid } = await requireSession();

  const listingSnapshot = await adminDb
    .collection("listings")
    .where("moderationStatus", "==", "visible")
    .where("status", "in", ["Available", "Pending"])
    .orderBy("createdAt", "desc")
    .limit(8)
    .get();

  const listings = listingSnapshot.docs.map((doc) => {
    const data = doc.data();

    return ListingSchema.parse({
      id: doc.id,
      ...data,
      createdAt: data.createdAt.toDate(),
      publishedAt: data.publishedAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
      priceChangedAt: data.priceChangedAt?.toDate() ?? null,
      soldAt: data.soldAt?.toDate() ?? null,
    });
  });

  if (listings.length === 0) return [];

  const sellerRefs = [
    ...new Set(listings.map((listing) => listing.sellerId)),
  ].map((sellerId) => adminDb.collection("users").doc(sellerId));

  const likeRefs = listings.map((listing) =>
    adminDb
      .collection("users")
      .doc(uid)
      .collection("likes")
      .doc(listing.id)
  );

  const [sellerSnapshots, likeSnapshots] = await Promise.all([
    adminDb.getAll(...sellerRefs),
    adminDb.getAll(...likeRefs),
  ]);

  const sellersById = new Map(
    sellerSnapshots.map((snapshot) => {
      if (!snapshot.exists) return [snapshot.id, null];

      const data = snapshot.data()!;
      return [
        snapshot.id,
        {
          displayName: data.displayName,
          program: data.program,
        },
      ];
    })
  );

  const likedIds = new Set(
    likeSnapshots
      .filter((snapshot) => snapshot.exists)
      .map((snapshot) => snapshot.id)
  );

  return listings.map((listing) =>
    ListingWithLikeStateSchema.parse({
      ...listing,
      seller: sellersById.get(listing.sellerId) ?? null,
      isLiked: likedIds.has(listing.id),
    })
  );
}

export async function getListing(
  slug: string
): Promise<import("@/schemas/listing.schema").ListingDetailedType | null> {
  const { uid } = await requireSession();

  const listingSnapshot = await adminDb
    .collection("listings")
    .where("slug", "==", slug)
    .limit(1)
    .get();

  const doc = listingSnapshot.docs[0];
  if (!doc) return null;

  const data = doc.data();

  if (
    data.moderationStatus !== "visible" ||
    !["Available", "Pending"].includes(data.status)
  ) {
    return null;
  }

  const listing = ListingSchema.parse({
    id: doc.id,
    ...data,
    createdAt: data.createdAt.toDate(),
    publishedAt: data.publishedAt.toDate(),
    updatedAt: data.updatedAt.toDate(),
    priceChangedAt: data.priceChangedAt?.toDate() ?? null,
    soldAt: data.soldAt?.toDate() ?? null,
  });

  const [sellerSnapshot, likeSnapshot] = await Promise.all([
    adminDb.collection("users").doc(listing.sellerId).get(),
    adminDb
      .collection("users")
      .doc(uid)
      .collection("likes")
      .doc(listing.id)
      .get(),
  ]);

  const sellerData = sellerSnapshot.data();

  return ListingWithLikeStateSchema.parse({
    ...listing,
    seller: sellerData
      ? {
          displayName: sellerData.displayName,
          program: sellerData.program,
        }
      : null,
    isLiked: likeSnapshot.exists,
  });
}
