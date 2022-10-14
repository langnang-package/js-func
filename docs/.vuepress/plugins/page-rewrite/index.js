const { path } = require("@vuepress/shared-utils");

const plugin = (options = {}, ctx) => ({
  name: "@langangn/vuepress-plugin-page-rewrite",
  additionalPages(app) {
    const { pages } = app;
    const rewrite_names = Object.keys(options.bundles);
    let rewrite_pages = pages.filter(
      (item) =>
        item.frontmatter.rewrite &&
        rewrite_names.includes(item.frontmatter.rewrite)
    );
    return rewrite_pages.map((page) => {
      let slots = {};
      while (
        page._strippedContent.indexOf("<!--") > 0 &&
        page._strippedContent.indexOf("-->") > 0
      ) {
        const content = page._strippedContent.substring(
          page._strippedContent.indexOf("<!--"),
          page._strippedContent.indexOf("-->") + 3
        );
        const split = content.split("\r\n");
        const name = split[0]
          .split(" ")
          .filter((v) => /rewrite:/.test(v))[0]
          .substring("rewrite:".length);
        const life = split[0]
          .split(" ")
          .filter((v) => /slot:/.test(v))[0]
          .substring("slot:".length);
        if (!slots[name]) slots[name] = {};
        slots[name][life] = split.slice(1, split.length - 1).join("\r\n");
        page._strippedContent =
          page._strippedContent.substring(
            0,
            page._strippedContent.indexOf("<!--")
          ) +
          page._strippedContent.substring(
            page._strippedContent.indexOf("-->") + 3
          );
      }
      return {
        ...page,
        content: options.bundles[page.frontmatter.rewrite].handler(
          page,
          options.bundles[page.frontmatter.rewrite],
          slots
        ),
      };
    });
  },
});

module.exports = plugin;
