import { Breadcrumbs } from "@/components/Marketplace/Breadcrumbs";
import { ListingImages } from "@/components/Marketplace/ListingDetails/ListingImages";
import { ListingDetailCard } from "@/components/Marketplace/ListingDetails/ListingDetailCard";
import { SimilarItemByCategory } from "@/components/Marketplace/ListingDetails/SimilarItemByCategory";

interface ListingDetailProps{
	params: Promise<{ slug: string }>
}

import { getListing } from "@/hooks/marketplace/listings.hook";

const crumbs = {
	links: [
		{
			label: "Marketplace",
			link: "/marketplace"
		},
		{
			label: "Textbooks & Reviewers",
			link: `/marketplace?category=${encodeURIComponent("Textbooks & Reviewers")}`
		}
	],
	page: "Principles of Anatomy and Physiology"
};

export default async function ListingDetailsPage({ params } : ListingDetailProps){
	const { slug } = await params;
	const listing = await getListing(slug);

	if(!listing){
		return (
			<h1>Listing Not Found!</h1>
		);
	}

	return(
		<main className="p-8 pt-4">
			<Breadcrumbs breadcrumbs={crumbs}/>
			<section className="mb-8 mt-4 product-details lg:flex-row flex flex-col gap-4">
				<ListingImages 
					listing={listing}
				/>
				<ListingDetailCard listing={listing} />
			</section>
			<SimilarItemByCategory listing={listing}/>
		</main>
	);
}
