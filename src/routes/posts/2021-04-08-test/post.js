export default {
  title: `Test Blog`,
  tags: ["react", "navi"],
  spoiler: "where is spoiler...",
  getContent: () => import("./document.mdx"),
};
