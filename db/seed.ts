import { db, Confess } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
 await db.insert(Confess).values([
    { name: "John Doe", to: "Jane Doe", message: "I love you!" },
    { name: "Alice", to: "Bob", message: "You are amazing!" },
    { name: "Charlie", to: "Diana", message: "Let's go on a date!" },
    { name: "Eve", to: "Frank", message: "You make me smile!" },
    { name: "Grace", to: "Heidi", message: "You are my best friend!" },
    { name: "Ivan", to: "Judy", message: "I appreciate you!" },
    { name: "Mallory", to: "Niaj", message: "You inspire me!" },
    { name: "Olivia", to: "Peggy", message: "You are wonderful!" },
    { name: "Quentin", to: "Rupert", message: "You are a great listener!" }
]);
}
