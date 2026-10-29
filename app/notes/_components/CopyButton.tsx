"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [status, setStatus] = useState<"copy" | "copied" | "error">("copy");
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  async function copyText() {
    if (resetTimer.current !== null) {
      window.clearTimeout(resetTimer.current);
      resetTimer.current = null;
    }

    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      resetTimer.current = window.setTimeout(() => {
        setStatus("copy");
        resetTimer.current = null;
      }, 2000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <button
      type="button"
      onClick={copyText}
      className="mt-6 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
      aria-live="polite"
    >
      {status === "copied"
        ? "Copied!"
        : status === "error"
          ? "Could not copy"
          : "Copy note"}
    </button>
  );
}
