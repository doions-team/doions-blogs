import cover from "./cover.svg";
import avatar from "./avatar.jpg";

export default {
  title: `Social Media for Businesses: A Beginner’s Guide`,
  author: "Ruchita Joglekar",
  avatar,
  tags: ["Social Media", "Business"],
  spoiler:
    "There was a time when social media websites like Facebook, Twitter, Instagram, Whatsapp, etc. were purely utilized for connecting people online, sharing information and ideas globally...",
  cover,
  getContent: () => import("./document.mdx"),
};
