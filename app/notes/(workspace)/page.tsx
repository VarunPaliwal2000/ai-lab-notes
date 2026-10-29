import { notes } from "../data";
import CopyButton from "../_components/CopyButton";

export default function NotesPage() {
  const note = notes[0];

  return (
    <article className="max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Selected note
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{note.title}</h1>
      <p className="mt-5 whitespace-pre-line text-base leading-7 text-slate-700">{note.body}</p>
      <CopyButton text={`${note.title}\n\n${note.body}`} />
    </article>
  );
}
