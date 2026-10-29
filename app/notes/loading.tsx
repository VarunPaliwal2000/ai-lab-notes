export default function NotesLoading() {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] gap-6" aria-label="Loading notes">
      <aside className="w-60 shrink-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 h-5 w-16 animate-pulse rounded bg-slate-200" />
        <nav className="space-y-2" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="h-10 animate-pulse rounded-xl bg-slate-200"
            />
          ))}
        </nav>
      </aside>
      <section className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
        <div className="mt-4 h-9 w-2/3 animate-pulse rounded bg-slate-200" />
        <div className="mt-6 h-24 w-full animate-pulse rounded bg-slate-100" />
      </section>
    </div>
  );
}
