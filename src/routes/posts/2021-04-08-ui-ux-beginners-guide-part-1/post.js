import cover from "./cover.jpg";

export default {
  title: `UI-UX : Beginner’s Guide; Part 1`,
  author: "Author 2",
  tags: ["UI-UX", "Series"],
  spoiler: "where is spoiler...",
  cover,
  getContent: () => import("./document.mdx"),
};
