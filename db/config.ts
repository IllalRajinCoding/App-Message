import { defineDb, defineTable, column } from "astro:db";

const Confess = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    to: column.text(),
    message: column.text(),
    like: column.number({ default: 0 }),
  },
});

export default defineDb({
  tables: { Confess },
});
