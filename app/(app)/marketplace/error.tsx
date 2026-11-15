"use client";

export default function MarketplaceError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="h-100 px-4 py-16 text-center flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold">Couldn’t load the marketplace</h2>
      <p className="mt-2 text-muted-foreground">
        Please try again.
      </p>
      <button
        className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
