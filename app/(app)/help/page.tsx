import {
  Info,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  Camera,
  ListChecks,
  Ban,
  Handshake,
  ChevronDown,
} from "lucide-react";
import {
  categories,
  listingStatuses,
  locations,
  type ListingStatus,
} from "@/types/market.types";

const steps = [
  {
    number: "1",
    title: "Find an item",
    description: `Browse listings in categories such as ${categories.join(", ")}.`,
  },
  {
    number: "2",
    title: "Chat with the seller",
    description:
      "Ask questions, request more details, and discuss the price with the seller through EscolarTrade messages.",
  },
  {
    number: "3",
    title: "Agree on a meetup",
    description:
      "Use messages to agree on a meetup location and time that work for both of you.",
  },
  {
    number: "4",
    title: "Inspect & pay in person",
    description:
      "Check that the item matches its listing before arranging payment directly with the seller.",
  },
];

const statusDetails: Record<
  ListingStatus,
  {
    label: string;
    description: string;
    footer: string;
    color: "green" | "yellow" | "gray" | "orange";
  }
> = {
  Available: {
    label: "Available to inquire about",
    description:
      "The listing appears in active marketplace results. Contact the seller to ask about the item.",
    footer: "Shown in marketplace results",
    color: "green",
  },
  Pending: {
    label: "A sale may be in progress",
    description:
      "The seller may be discussing a sale or arranging a meetup. The listing remains visible, so check with the seller before making plans.",
    footer: "Still shown in marketplace results",
    color: "yellow",
  },
  Sold: {
    label: "Marked as sold",
    description:
      "The seller has marked the item as sold. It no longer appears in active marketplace results.",
    footer: "Removed from active results",
    color: "gray",
  },
  "Out of Stock": {
    label: "Currently unavailable",
    description:
      "The seller has marked the item as out of stock. It no longer appears in active marketplace results.",
    footer: "Removed from active results",
    color: "orange",
  },
};

const statuses = listingStatuses.map((name) => ({
  name,
  ...statusDetails[name],
}));

const tips = [
  {
    icon: MapPin,
    title: "Choose a Convenient Meetup Place",
    description: `Choose a location that works for both of you. Listing meetup suggestions include ${locations.join(", ")}.`,
    note:
      "These are user-selected suggestions. EscolarTrade does not operate, approve, or supervise these locations.",
  },
  {
    icon: MessageSquare,
    title: "Confirm Details in Messages",
    description:
      "Confirm the meetup place, time, and agreed price in your conversation so you both have the same details.",
  },
  {
    icon: Search,
    title: "Inspect Before Paying",
    description:
      "Check the item's condition, relevant textbook edition or course requirements, and any included parts before arranging payment.",
  },
  {
    icon: ShieldCheck,
    title: "Protect Your Privacy",
    description:
      "Keep initial discussions in EscolarTrade messages. Avoid sharing unnecessary personal information, home addresses, or social media accounts.",
  },
];

const faqs = [
  {
    question: "How do I contact a seller?",
    answer:
      "Open a listing and use EscolarTrade messages to ask questions, request more details, and discuss a meetup.",
  },
  {
    question: "How does payment work?",
    answer:
      "EscolarTrade does not process payments or provide escrow. Buyers and sellers arrange payment directly. Agree on the price beforehand and inspect the item before paying.",
  },
  {
    question: 'What does "Pending" mean?',
    answer:
      "The seller has marked the listing as pending, often while discussing a possible sale or arranging a meetup. The listing remains visible, so contact the seller to check its availability.",
  },
  {
    question: "How does a seller mark an item as sold?",
    answer:
      "After completing a sale, the seller can change the listing status to Sold from My Listings. It will then be removed from active marketplace results.",
  },
  {
    question: "Does liking an item reserve it?",
    answer:
      "No. Liking a listing saves it to your Likes page, but does not reserve the item. Contact the seller to ask about availability.",
  },
];

const guidelines = [
  {
    icon: Camera,
    title: "Use Accurate Photos & Descriptions",
    description:
      "Upload clear, recent photos of the actual item and describe it honestly.",
  },
  {
    icon: ListChecks,
    title: "Describe the Item's Condition",
    description:
      "Mention markings, wear, missing parts, included accessories, or other details buyers should know.",
  },
  {
    icon: Ban,
    title: "Don't List Prohibited Items",
    description:
      "Do not list stolen or counterfeit goods, illegal items, exam leaks, or materials intended for cheating.",
  },
  {
    icon: Handshake,
    title: "Communicate Clearly",
    description:
      "Confirm the price and meetup details in messages. If plans change, let the other person know promptly.",
  },
];

export default function HelpPage() {
  return (
    <main className="w-full text-foreground">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-10">
        {/* Page Introduction */}
        <section className="border-b border-border pb-5">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Help & Safety
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Practical guidance for buying and selling through EscolarTrade, an
            independent student-built marketplace. EscolarTrade is not
            affiliated with or endorsed by Centro Escolar University.
          </p>
        </section>

        {/* How It Works */}
        <section className="mt-9">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-bold">How it works</h2>

            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              4 Easy Steps
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded border border-border text-sm font-bold">
                  {step.number}
                </span>

                <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>

                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Good to Know */}
          <div className="mt-3 flex items-start gap-3 rounded-lg border border-border p-3">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />

            <p className="text-xs leading-5 text-muted-foreground">
              <span className="font-semibold text-foreground">
                Good to know:
              </span>{" "}
              Liking a listing saves it to your Likes page, but does not reserve
              it. Contact the seller to ask whether it is still available.
            </p>
          </div>
        </section>

        {/* Listing Statuses */}
        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-lg font-bold">Listing Statuses Explained</h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Understanding the status labels shown on marketplace listings.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {statuses.map((status) => (
              <div
                key={status.name}
                className="flex flex-col rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm"
              >
                <div className="mb-3">
                  {status.color === "green" && (
                    <span className="inline-flex items-center gap-1 rounded border border-emerald-500/40 px-2 py-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {status.name}
                    </span>
                  )}

                  {status.color === "yellow" && (
                    <span className="inline-flex items-center gap-1 rounded border border-amber-500/40 px-2 py-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {status.name}
                    </span>
                  )}

                  {status.color === "gray" && (
                    <span className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                      {status.name}
                    </span>
                  )}

                  {status.color === "orange" && (
                    <span className="inline-flex items-center gap-1 rounded border border-orange-500/40 px-2 py-1 text-[10px] font-semibold text-orange-600 dark:text-orange-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      {status.name}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-semibold">{status.label}</h3>

                <p className="mt-2 flex-1 text-xs leading-5 text-muted-foreground">
                  {status.description}
                </p>

                <div className="mt-5 border-t border-border pt-3 text-[10px] text-muted-foreground">
                  {status.footer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meetup & Trading Tips */}
        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-lg font-bold">Meetup & Trading Tips</h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Practical suggestions for arranging peer-to-peer exchanges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {tips.map((tip) => {
              const Icon = tip.icon;

              return (
                <div
                  key={tip.title}
                  className="rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0 text-foreground" />

                    <h3 className="text-sm font-semibold">{tip.title}</h3>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {tip.description}
                  </p>

                  {tip.note && (
                    <div className="mt-3 rounded-md border border-border p-2 text-[10px] leading-4 text-muted-foreground">
                      {tip.note}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-lg font-bold">Frequently Asked Questions</h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Quick answers to common questions about buying and selling.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-card text-card-foreground shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-sm font-medium marker:hidden">
                  {faq.question}

                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>

                <div className="border-t border-border px-4 py-4">
                  <p className="text-xs leading-6 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Community Listing Guidelines */}
        <section className="mb-10 mt-10">
          <div className="mb-4">
            <h2 className="text-lg font-bold">Community Listing Guidelines</h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Simple standards for clear, accurate, and respectful listings.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm sm:grid-cols-2">
            {guidelines.map((guideline) => {
              const Icon = guideline.icon;

              return (
                <div
                  key={guideline.title}
                  className="flex items-start gap-3"
                >
                  <div className="rounded-md border border-border p-1.5">
                    <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold">
                      {guideline.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {guideline.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
