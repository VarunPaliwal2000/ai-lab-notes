import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center justify-center px-6 py-12">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Home
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Keep your ideas in one place.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          This lightweight notes app makes it easy to browse recent ideas, open a specific note,
          and add fresh thoughts without leaving the shared layout.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/notes"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            View notes
          </Link>
          <Link
            href="/notes/new"
            className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            New note
          </Link>
        </div>
      </div>
    </div>
  );
}
