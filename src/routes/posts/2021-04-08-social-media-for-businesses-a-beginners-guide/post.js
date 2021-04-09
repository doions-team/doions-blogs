import cover from "./cover.svg";
import avatar from "./avatar.jpg";

export default {
  title: `Social Media for Businesses: A Beginner’s Guide`,
  author: "Ruchita Joglekar",
  avatar,
  tags: ["Social Media", "Business"],
  spoiler: "where is spoiler...",
  cover,
  getContent: () => import("./document.mdx"),
};
