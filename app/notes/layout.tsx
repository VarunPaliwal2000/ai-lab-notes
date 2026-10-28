import Link from "next/link";
import { notes } from "./data";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl gap-6 px-6 py-6">
      <aside className="w-60 shrink-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Notes
          </h2>
          <Link
            href="/notes/new"
            className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-white transition hover:bg-slate-700"
          >
            New
          </Link>
        </div>

        <nav className="space-y-2">
          {notes.map((note) => (
            <Link
              key={note.id}
              href={`/notes/${note.id}`}
              className="block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
            >
              {note.title}
            </Link>
          ))}
        </nav>
      </aside>

      <section className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {children}
      </section>
    </div>
  );
}
