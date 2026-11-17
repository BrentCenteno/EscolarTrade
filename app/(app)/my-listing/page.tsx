"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  MessageSquare,
  MapPin,
  Pencil,
  Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// TYPES
type ListingStatus = "Available" | "Pending" | "Sold";

type Listing = {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  condition: string;
  status: ListingStatus;
  image: string;
  location: string;
  chats: number;
  date: string;
};

// SAMPLE DATA
const initialListings: Listing[] = [
  {
    id: 1,
    title: "Principles of Anatomy and Physiology (15th Global Edition)",
    category: "Textbooks & Reviewers",
    price: 1250,
    description: "Hardbound • Complete",
    condition: "Used - Like New",
    status: "Available",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    location: "Centennial Bldg, Library Lobby",
    chats: 3,
    date: "2025-10-15",
  },
  {
    id: 2,
    title: "CEU Female Duty Scrubs (Pink/White M)",
    category: "Uniforms",
    price: 480,
    description: "Medium • Pink & White",
    condition: "Used - Excellent",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800",
    location: "Canteen, Gate 1",
    chats: 1,
    date: "2025-10-12",
  },
  {
    id: 3,
    title: "Littmann Classic III Stethoscope (Black)",
    category: "Supplies & Stationery",
    price: 3950,
    description: "Special Black Edition",
    condition: "Used - Excellent",
    status: "Available",
    image: "https://images.unsplash.com/photo-1615486363973-f79d875780cf?w=800",
    location: "Science Hall",
    chats: 4,
    date: "2025-10-10",
  },
  {
    id: 4,
    title: "CEU Embroidered Lab Gown (Size Small)",
    category: "Uniforms",
    price: 260,
    description: "Size Small • Crisp condition",
    condition: "Used - Good",
    status: "Sold",
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=800",
    location: "Student Ctr",
    chats: 0,
    date: "2025-10-05",
  },
  {
    id: 5,
    title: "Casio fx-991CW ClassWiz Scientific Calculator",
    category: "Scientific Calculators",
    price: 1150,
    description: "Includes Slide Cover",
    condition: "Used - Like New",
    status: "Sold",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800",
    location: "Centennial Bldg",
    chats: 0,
    date: "2025-10-01",
  },
];

export default function MyListingsPage() {
  const [listings, setListings] = useState<Listing[]>(initialListings);
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  // FILTER AND SORT
  const filteredListings = useMemo(() => {
    const result = listings.filter((listing) => {
      const matchesTab =
        activeTab === "All" || listing.status === activeTab;

      const matchesSearch =
        listing.title.toLowerCase().includes(search.toLowerCase()) ||
        listing.category.toLowerCase().includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });

    return [...result].sort((a, b) => {
      switch (sort) {
        case "oldest":
          return a.date.localeCompare(b.date);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return b.date.localeCompare(a.date);
      }
    });
  }, [listings, activeTab, search, sort]);

  // UPDATE STATUS
  const handleStatusChange = (
    id: number,
    status: ListingStatus
  ) => {
    setListings((previous) =>
      previous.map((listing) =>
        listing.id === id ? { ...listing, status } : listing
      )
    );
  };

  // STATUS STYLING
  const getStatusStyle = (status: ListingStatus) => {
    switch (status) {
      case "Available":
        return "border-green-500/30 text-green-600";
      case "Pending":
        return "border-yellow-500/30 text-yellow-600";
      case "Sold":
        return "border-muted-foreground/30 text-muted-foreground";
    }
  };

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 lg:px-7">

        {/* PAGE HEADER */}
        <div className="flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-[26px]">
              My Listings
            </h1>
            <p className="mt-1 text-xs text-muted-foreground">
              Manage the items you're selling.
            </p>
          </div>

          <Button
            size="sm"
            className="w-full gap-2 sm:w-auto"
            onClick={() => alert("Sample: Post a new listing")}
          >
            <Plus className="h-4 w-4" />
            Post a Listing
          </Button>
        </div>

        {/* FILTERS AND SEARCH */}
        <div className="mt-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="h-9 w-full justify-start sm:w-auto">
              <TabsTrigger value="All" className="px-4 text-xs">
                All
              </TabsTrigger>
              <TabsTrigger value="Available" className="px-4 text-xs">
                Available
              </TabsTrigger>
              <TabsTrigger value="Pending" className="px-4 text-xs">
                Pending
              </TabsTrigger>
              <TabsTrigger value="Sold" className="px-4 text-xs">
                Sold
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
            <div className="relative flex-1 lg:w-[225px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search your listings..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 pl-9 text-xs"
              />
            </div>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="h-9 w-full text-xs sm:w-[155px]">
                <SelectValue placeholder="Sort listings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* LISTING COUNT */}
        <div className="mb-3 mt-5">
          <p className="text-xs text-muted-foreground">
            Showing {filteredListings.length} listings
          </p>
        </div>

        {/* LISTING GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filteredListings.map((listing) => (
            <Card
              key={listing.id}
              className="flex min-w-0 flex-col overflow-hidden rounded-lg py-0 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* PRODUCT IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge
                  variant="secondary"
                  className="absolute left-2 top-2 rounded-sm px-2 py-1 text-[10px] font-semibold"
                >
                  {listing.condition}
                </Badge>
              </div>

              {/* PRODUCT DETAILS */}
              <CardContent className="flex flex-1 flex-col px-3.5 pb-3 pt-4">
                <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                  {listing.category}
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-base font-bold">
                    ₱{listing.price.toLocaleString("en-PH")}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {listing.description}
                  </span>
                </div>

                <h2 className="mt-1.5 min-h-[42px] text-sm font-semibold leading-[1.4]">
                  {listing.title}
                </h2>

                <div className="my-2.5 border-t" />

                {/* SELLER INFORMATION */}
                <div className="flex items-start gap-2">
                  <Avatar className="h-[22px] w-[22px] border">
                    <AvatarFallback className="text-[9px] font-semibold">
                      BR
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0">
                    <p className="text-[10px] leading-4">
                      <span className="font-semibold">Bea R.</span>
                      <span className="text-muted-foreground">
                        {" "}· BS Nursing · 3rd Yr
                      </span>
                    </p>

                    <p className="mt-0.5 flex items-start gap-1 text-[10px] leading-4 text-muted-foreground">
                      <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
                      <span>{listing.location}</span>
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* CARD FOOTER */}
              <CardFooter className="mt-auto flex-col items-stretch border-t px-2.5 py-2.5">
                {listing.status === "Sold" ? (
                  <div className="flex items-center justify-between gap-2">
                    <Badge
                      variant="outline"
                      className="rounded-sm text-[10px] text-muted-foreground"
                    >
                      SOLD
                    </Badge>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-[23px] rounded-sm px-2.5 text-[10px]"
                        onClick={() => alert(`Viewing: ${listing.title}`)}
                      >
                        <Eye className="mr-1 h-3 w-3" />
                        View Listing
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-[23px] gap-1 px-1 text-[10px] text-muted-foreground"
                        onClick={() => alert("Sample messages")}
                      >
                        <MessageSquare className="h-3 w-3" />
                        Messages
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-semibold">
                          Status:
                        </span>
                        <Badge
                          variant="outline"
                          className={`rounded-sm px-1.5 py-0 text-[9px] ${getStatusStyle(
                            listing.status
                          )}`}
                        >
                          {listing.status}
                        </Badge>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-5 gap-1 px-1 text-[10px] text-muted-foreground"
                        onClick={() => alert("Sample messages")}
                      >
                        <MessageSquare className="h-3 w-3" />
                        {listing.chats}{" "}
                        {listing.chats === 1 ? "chat" : "chats"}
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-[23px] text-[10px]"
                        onClick={() => alert(`Editing: ${listing.title}`)}
                      >
                        <Pencil className="mr-1 h-3 w-3" />
                        Edit
                      </Button>

                      <Select
                        value={listing.status}
                        onValueChange={(value) =>
                          handleStatusChange(
                            listing.id,
                            value as ListingStatus
                          )
                        }
                      >
                        <SelectTrigger className="h-[23px] min-w-0 px-2 text-[10px]">
                          <SelectValue placeholder="Change Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Available">Available</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Sold">Sold</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredListings.length === 0 && (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <div className="mb-3 rounded-full border p-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>

            <h3 className="text-sm font-semibold">
              No listings found
            </h3>

            <p className="mt-1 text-xs text-muted-foreground">
              Try changing your search or selected filter.
            </p>

            <Button
              variant="link"
              size="sm"
              className="mt-3 text-xs"
              onClick={() => {
                setSearch("");
                setActiveTab("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}