
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

const steps = [
  {
    number: "1",
    title: "Find an item",
    description:
      "Search or browse student listings across textbooks, uniforms, electronics, and campus supplies.",
  },
  {
    number: "2",
    title: "Chat with the seller",
    description:
      "Inquire about details, negotiate pricing, or ask questions directly in built-in platform chat.",
  },
  {
    number: "3",
    title: "Agree on a meetup",
    description:
      "Coordinate a mutually convenient campus spot and exact schedule between your classes.",
  },
  {
    number: "4",
    title: "Inspect & pay in person",
    description:
      "Check the item thoroughly before handing over cash or person-to-person mobile transfer.",
  },
];

const statuses = [
  {
    name: "Available",
    label: "Open to all inquiries",
    description:
      "The listing is live and active. Any student can message the seller, make an offer, or ask questions.",
    footer: "Default status upon posting",
    color: "green",
  },
  {
    name: "Pending",
    label: "Meetup in progress",
    description:
      "The seller is actively chatting or arranging a meetup with an interested buyer. Other buyers can still view and message in case the deal falls through. Only the seller changes this status.",
    footer: "Updated manually by seller",
    color: "yellow",
  },
  {
    name: "Sold",
    label: "Exchange completed",
    description:
      "The exchange is completed. Sold items are removed from general marketplace browsing and archived under user listings.",
    footer: "Archived from public feed",
    color: "gray",
  },
];

const tips = [
  {
    icon: MapPin,
    title: "Convenient Public Spots",
    description:
      "Pick familiar, high-traffic common areas such as the Campus Canteen, Centennial Building lobby, Library lobby, Student Center, or Gate 1.",
    note:
      "Note: These are practical suggestions mutually decided by users, not guaranteed or supervised safety zones.",
  },
  {
    icon: MessageSquare,
    title: "Confirm in Chat First",
    description:
      "Before meeting up, clarify the exact spot, meetup time window, and finalized price inside the chat thread to prevent confusion or last-minute renegotiation.",
  },
  {
    icon: Search,
    title: "Inspect Before Paying",
    description:
      "Always inspect physical condition, check book edition/syllabus requirements, power on electronics or scientific calculators, and confirm included parts before handing over payment.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Keep initial discussions inside the platform chat. You do not need to share unnecessary private contact information, home addresses, or personal social media handles.",
  },
];

const faqs = [
  {
    question: "How do I contact a seller?",
    answer:
      "Open the item listing you are interested in and use the built-in messaging feature to contact the seller. You can ask questions, request additional details, and discuss the meetup schedule.",
  },
  {
    question: "How does payment work?",
    answer:
      "Buyer and seller arrange payment directly during their in-person meetup. Inspect the item first, confirm that it matches the listing description, and pay only after you are satisfied. EscolarTrade does not process payments.",
  },
  {
    question: 'What does "Pending" mean?',
    answer:
      "Pending means the seller is currently arranging a meetup or discussing a transaction with an interested buyer. The listing remains visible, and other students may still send inquiries.",
  },
  {
    question: "How does a seller mark an item Sold?",
    answer:
      "After successfully completing the exchange, the seller can update the listing status to Sold through their My Listings page. The item will then be removed from general marketplace browsing.",
  },
  {
    question: "Can someone reserve an item by saving it?",
    answer:
      "No. Saving an item only adds it to your wishlist. It does not reserve the item or prevent other students from contacting the seller. Items remain available until the seller marks them as Sold.",
  },
];

const guidelines = [
  {
    icon: Camera,
    title: "Accurate Photos & Descriptions",
    description:
      "Use clear, recent photos of the actual item being sold rather than stock product images.",
  },
  {
    icon: ListChecks,
    title: "Honest Condition Disclosure",
    description:
      "Mention highlights, written notes, textbook markings, cosmetic wear, missing covers, or accessories candidly.",
  },
  {
    icon: Ban,
    title: "Prohibited Listing Items",
    description:
      "No exam leakages, midterm cheat material, unauthorized answer keys, illegal contraband, counterfeit goods, or stolen property.",
  },
  {
    icon: Handshake,
    title: "Fair Campus Peer Trading",
    description:
      "Honor agreed meetup times and prices. Treat fellow students with courtesy and prompt communication.",
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
            How EscolarTrade works and tips for trading with other people
            in the campus community.
          </p>
        </section>

        {/* How It Works */}
        <section className="mt-9">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-bold">
              How it works
            </h2>

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

                <h3 className="mt-3 text-sm font-semibold">
                  {step.title}
                </h3>

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
              Saving an item adds it to your wishlist, but does not
              reserve it. Items remain available to other buyers until
              marked Sold by the seller.
            </p>
          </div>
        </section>

        {/* Listing Statuses */}
        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-lg font-bold">
              Listing Statuses Explained
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Understanding the badge labels you see while browsing.
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
                      Available
                    </span>
                  )}

                  {status.color === "yellow" && (
                    <span className="inline-flex items-center gap-1 rounded border border-amber-500/40 px-2 py-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Pending
                    </span>
                  )}

                  {status.color === "gray" && (
                    <span className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                      Sold
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-semibold">
                  {status.label}
                </h3>

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
            <h2 className="text-lg font-bold">
              Meetup & Trading Tips
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Practical peer guidelines for simple, hassle-free campus exchanges.
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

                    <h3 className="text-sm font-semibold">
                      {tip.title}
                    </h3>
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
            <h2 className="text-lg font-bold">
              Frequently Asked Questions
            </h2>

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
            <h2 className="text-lg font-bold">
              Community Listing Guidelines
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Simple standards to keep listings honest, accurate, and fair.
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
