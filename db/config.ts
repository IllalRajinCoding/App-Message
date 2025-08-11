import { defineDb, defineTable, column, NOW } from "astro:db";

const Confess = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    to: column.text(),
    message: column.text(),
    create_at: column.date({ default: NOW }),
    song : column.text({ default: "" }),
  },
});

const likesMessage = defineTable({
  columns: {
    confess_id: column.number({
      primaryKey: true,
      references: () => Confess.columns.id,
    }),
    likes: column.number({ default: 0 }),
  },
});

export default defineDb({
  tables: { Confess, likesMessage },
});
