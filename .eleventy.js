module.exports = (config) => {
  const markdownIt = new require("markdown-it")({
    typographer: true,
    linkify: true,
    html: true,
  });

  const markdownItAnchor = require("markdown-it-anchor");
  markdownIt.use(markdownItAnchor);

  config.setLibrary("md", markdownIt);

  config.addPlugin(require("eleventy-plugin-nesting-toc"), {
    tags: ["h3", "h4", "h5"],
    ul: false,
  });

  config.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  config.addPlugin(require("@11ty/eleventy-plugin-rss"));

  config.addFilter("dateDisplay", require("./filters/date-display.js"));

  config.addPassthroughCopy({ public: "./" });

  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
  });

  config.setDataDeepMerge(true);

  config.addCollection("postsWithoutDrafts", (collection) =>
    [...collection.getFilteredByGlob("src/posts/*.md")].filter(
      (post) => !post.data.draft
    )
  );

  const StatusesInOrder = [
    "in progress",
    "maintained",
    "finished",
    "abandoned",
  ];

  function sortByStatus(a, b) {
    return (
      StatusesInOrder.indexOf(a.data.status) -
      StatusesInOrder.indexOf(b.data.status)
    );
  }

  config.addCollection("sortedProjects", (collection) =>
    [...collection.getFilteredByGlob("src/projects/*.md")].sort(sortByStatus)
  );

  config.addCollection("activeProjects", (collection) =>
    [...collection.getFilteredByGlob("src/projects/*.md")]
      .filter(
        (project) =>
          project.data.status === "in progress" ||
          project.data.status === "maintained"
      )
      .sort(sortByStatus)
  );

  config.addCollection("visibleTags", () => [
    "app",
    "communication",
    "ddd",
    "library",
    "recipes",
    "software-development",
    "weather",
    "writing",
    "voice",
    "chrome-extension",
    "graphql",
    "javascript",
    "rails",
    "react",
    "ruby",
  ]);

  config.addCollection("recentPosts", (collection) =>
    [...collection.getFilteredByGlob("src/posts/*.md")].reverse().slice(0, 3)
  );

  return {
    pathPrefix: require("./src/globals/site.json").baseUrl,
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "includes/layouts",
      data: "globals",
    },
  };
};
