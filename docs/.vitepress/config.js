export default {
  title: "Filerion",
  description: "Documentation for Filerion",

  themeConfig: {
    siteTitle: "Filerion",
    editLink: {
      pattern: "https://github.com/kjk/filerion-docs/edit/main/docs/:path",
    },
    sidebar: [
      {
        text: "Main",
        items: [
          { text: "Filerion", link: "/index" },
          { text: "S3 Config", link: "/s3-support" },
          {
            text: "Upload files from computer",
            link: "/upload-files-from-computer",
          },
        ],
      },
    ],
  },
};
