"use client"

import { useState } from "react"
import { Heart, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import Link from "next/link"
import { ListingDetailedType } from "@/schemas/listing.schema"
import { useLikeListing, useUnlikeListing } from "@/hooks/marketplace/like.hook"
import { toast } from "sonner"

export function ListingItem({ listing }: { listing: ListingDetailedType }) {
	const [isLiked, setIsLiked]	= useState(listing.isLiked);
	const likeListing = useLikeListing();
	const unlikeListing = useUnlikeListing();

	async function handleLikeListing(state: boolean){
		setIsLiked(state);

		try{
			if(state){
				await likeListing(listing.id);
			}else{
				await unlikeListing(listing.id);
			}
		}catch {
			toast.error("Could not like this listing. Please try again.")
			setIsLiked(!state);
		}
	}

  return (
		<Link href={`/marketplace/${listing.slug}`} >
			<Item
				variant="outline"
				role="listitem"
				className="items-start lg:items-center"
			>
				<ItemMedia>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={listing.images[0]}
						alt={listing.title}
						loading="lazy"
						className="aspect-square w-20 rounded-sm object-cover"
					/>
				</ItemMedia>
				<ItemContent className="min-w-0">
					<div className="flex flex-wrap items-center gap-2">
						<Badge className="hidden lg:block" variant="secondary">{listing.condition}</Badge>
						<span className="text-xs text-muted-foreground">
							{listing.category}
						</span>
					</div>
					<ItemTitle className="line-clamp-1">{listing.title}</ItemTitle>
					<ItemDescription>{listing.description}</ItemDescription>
					<div className="hidden lg:flex flex-col gap-1 text-xs lg:flex-row lg:flex-wrap lg:gap-4">
						<p>
							<span className="font-medium">{listing.seller?.displayName}</span>
							<span className="text-muted-foreground">
								{" "}
								· {listing.seller?.program}
							</span>
						</p>
						<p className="flex items-center gap-1 text-muted-foreground">
							<MapPin className="size-3 shrink-0" />
							{listing.meetupLocations[0]}
						</p>
					</div>
				</ItemContent>
				<ItemActions className="basis-full justify-end lg:basis-auto">
					<p className="font-semibold">
						₱{(listing.priceCentavos / 100)}
					</p>
					<Button
						variant="ghost"
						size="icon"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();

							handleLikeListing(!isLiked)
						}}
					>
						<Heart 
							stroke="red"
							fill={isLiked ? "red" : "none"}
						/>
					</Button>
				</ItemActions>
			</Item>
		</Link>
	)
}
