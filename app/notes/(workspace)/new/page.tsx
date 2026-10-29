export default function NewNotePage() {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        New note
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Write a new note</h1>
      <div className="mt-6 space-y-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
        <label className="block text-sm font-medium text-slate-700">
          Title
          <input
            type="text"
            placeholder="Draft title"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition focus:border-slate-400"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Body
          <textarea
            rows={8}
            placeholder="Write your thoughts here..."
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 transition focus:border-slate-400"
          />
        </label>
        <button
          type="button"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Save note
        </button>
      </div>
    </div>
  );
}
