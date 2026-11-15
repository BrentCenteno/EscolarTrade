"use client";

import { db } from "@/lib/firebase";
import { useGetUser } from "../zustand/auth.store";
import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";

export function useLikeListing(){
	const user = useGetUser();

	return async (listingId: string) => {
		if (!user) {
			return { success: false, message: "Please sign in to like listings." };
		}

		const ref = doc(db, "users", user.uid, "likes", listingId);

		await setDoc(ref, {
			createdAt: serverTimestamp()
		})

		return {
			success: true,
			message: "Listing liked successfully"
		};
	};
}

export function useUnlikeListing(){
	const user = useGetUser();

	return async (listingId: string) => {
		if (!user) {
			return { success: false, message: "Please sign in to like listings." };
		}

		const ref = doc(db, "users", user.uid, "likes", listingId);

		await deleteDoc(ref);

		return {
			success: true,
			message: "Listing unliked successfully"
		};
	};
}

