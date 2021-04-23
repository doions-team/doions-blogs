import cover from "./cover.png";
import avatar from "./avatar.jpg";

export default {
  title: `UI-UX : Beginner’s Guide; Part 2`,
  author: "Sukruti Atre",
  avatar,
  tags: ["UI-UX", "Series"],
  spoiler:
    "What is UI UX? Why are we hearing it so much around the streets of tech advanced areas? Is it some new slang? Are the people using it trying to look cool or does it actually mean something ? When you read UIUX, what comes to your mind?...",
  cover,
  getContent: () => import("./document.mdx"),
};
