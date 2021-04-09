import cover from "./cover.svg";

export default {
  title: `Social Media for Businesses: A Beginner’s Guide`,
  author: "Author 1",
  tags: ["Social Media", "Business"],
  spoiler: "where is spoiler...",
  cover,
  getContent: () => import("./document.mdx"),
};
