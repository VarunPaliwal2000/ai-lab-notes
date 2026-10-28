export type Note = {
  id: string;
  title: string;
  body: string;
};

export const notes: Note[] = [
  {
    id: "42",
    title: "Note 42",
    body:
      "This is the first note in the stack. It keeps the key idea front and center so the writing stays easy to scan and easy to revisit.",
  },
  {
    id: "17",
    title: "Note 17",
    body:
      "A quick reminder about small wins. Momentum comes from showing up consistently, even when the work is only a few lines at a time.",
  },
  {
    id: "24",
    title: "Note 24",
    body:
      "A design note for the layout. Keep content focused, preserve context, and let the UI breathe so information feels intentional.",
  },
  {
    id: "9",
    title: "Note 9",
    body:
      "Observations from the roadmap. The most useful features are often the ones that remove friction without adding noise.",
  },
  {
    id: "78",
    title: "Note 78",
    body:
      "A final summary for the week: prune the unnecessary, build the simple path, and keep the product easy to explain to a teammate.",
  },
];
