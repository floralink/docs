import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

export default defineConfig({
  title: "Floralink",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  description: "Handbuch zur Webanwendung Floralink",
  lang: "de-DE",
  base: "/docs/",
  lastUpdated: true,
  appearance: "dark",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      {
        text: "Wissenssammlung",
        link: "https://flora-link.de/info",
      },
      {
        text: "Floralink-Handbuch",
        link: "/",
      },
      {
        text: "Floralink",
        link: "https://flora-link.de",
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/floralink" }],
    sidebar,
  },
});
