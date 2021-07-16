/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Evans Docs",
  tagline: "A place to share and write",
  url: "https://github.com/EvanMcDowell31",
  baseUrl: "/EvanDocs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Evan_McDowell.jpeg",
  organizationName: "EvanMcDowell31", // Usually your GitHub org/user name.
  projectName: "EvanDocs", // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: "Home",
      logo: {
        alt: "HomeIcon",
        src: "img/icons8-home.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/EvanMcDowell31",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              to: "https://github.com/EvanMcDowell31",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              to: "mailTo:evanmcdowell31@gmail.com",
            },
            {
              label: "LinkedIn",
              to: "https://www.linkedin.com/in/evan-mcdowell-781536b0/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Evan McDowell. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/EvanMcDowell31/EvanDocs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/EvanMcDowell31/EvanDocs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
