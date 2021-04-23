import cover from "./cover.png";
import avatar from "./avatar.jpg";

export default {
  title: `UI-UX : Beginner’s Guide; Part 2`,
  author: "Sukruti Atre",
  avatar,
  tags: ["UI-UX", "Series"],
  spoiler:
    "As product designers, there is always work in progress,in different things being worked on from different people. When those people leave — whether temporarily or permanently — that environment, the design system should live on...",
  cover,
  getContent: () => import("./document.mdx"),
};
