"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

export default function NotesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  function tryAgain() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div
      role="alert"
      className="rounded-2xl border border-rose-200 bg-white p-8 shadow-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
        Notes unavailable
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
        Something went wrong
      </h1>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {error.message || "The notes could not be loaded. Please try again."}
      </p>
      <button
        type="button"
        onClick={tryAgain}
        className="mt-6 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        Try again
      </button>
    </div>
  );
}
