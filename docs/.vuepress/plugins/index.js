const { resolve } = require("path");
const fs = require("fs");
module.exports = [
  /**
   * 页面滚动时自动激活侧边栏链接的插件
   */
  // ["@vuepress/active-header-links"],
  /**
   * back-to-top 插件
   */
  // ["@vuepress/back-to-top"],
  // ["@vuepress/blog"],
  /**
   * Google analytics 插件
   */
  // ["@vuepress/google-analytics"],
  /**
   * last-updated 插件。
   */
  // ["@vuepress/last-updated"],
  // ["@vuepress/medium-zoom"],
  /**
   * 一个基于 nprogress (opens new window)的进度条插件
   */
  // ["@vuepress/nprogress"],
  /**
   * PWA 插件
   */
  // ["@vuepress/pwa"],
  /**
   * 注册组件的插件
   */
  // ["@vuepress/register-components"],
  /**
   * 基于 Headers 的搜索插件
   */
  // ["@vuepress/search"],
  /**
   * 使你的 VuePress 站点支持简洁链接。
   */
  // ["vuepress-plugin-clean-urls"],
  /**
   * 在你的 VuePress 站点中注册新的 Markdown 容器。
   */
  // ["vuepress-plugin-container"],
  /**
   * 处理你的 VuePress 站点中的复制操作。
   */
  // ["copyright"],
  /**
   * 在你的 VuePress 页面信息中集成 git 日志。
   */
  // ["vuepress-plugin-git-log"],
  /**
   * 让你的 VuePress 站点中的 Markdown 文件支持 TeX 语法。
   */
  // ["vuepress-plugin-mathjax"],
  /**
   * 从其他网站迁移到 VuePress。
   */
  // ["vuepress-plugin-migrate"],
  /**
   * 为你的 VuePress 站点增加目录组件
   */
  // ["vuepress-plugin-table-of-contents"],
  /**
   * code-switcher
   */
  ["code-switcher"],
  /**
   *  appends a copy button to every instance of a given selector (defaults to div[class*="language-"] pre)
   */
  // ["vuepress-plugin-code-copy"],
  /**
   * Merge Markdown files in a single Markdown
   */
  // [
  //   "vuepress-plugin-merge-pages",
  //   {
  //     bundles: [
  //       {
  //         path: "/function/",
  //         name: "Function", // optional
  //         filter: (pages) => {
  //           // optional
  //           return pages.filter(
  //             ({ path }) =>
  //               path.includes("/function/") && !path.includes("/function/_")
  //           );
  //         },
  //         mergePages: (pages) => {
  //           // optional
  //           const pageBreak = '<hr class="page-break" />\n\n';
  //           // const initialValue = `\n\n${pageBreak}`;
  //           const content = pages.reduce((acc, current) => {
  //             return `${acc}${current.content}\n\n${pageBreak}`;
  //           }, "");
  //           return content;
  //         },
  //       },
  //     ],
  //   },
  // ],
  /**
   * Generate dynamic VuePress pages from JSON Schemas.
   */
  // [
  //   "schema2md",
  //   {
  //     pages: {},
  //   },
  // ],
  /**
   * adding JavaScript charting library Chart.js to VuePress 2 to create interactive charts in Markdown
   */
  // ["vuepress-plugin-chart"],
  /**
   * vuepress-plugin-flowchart
   */
  // ["flowchart"],
  // [require("./github-file")],

  [
    require("./markdown-template"),
    {
      bundles: {
        function: {
          handler(page, option, slots) {
            let names = page.frontmatter.templateNames || [
              page.frontmatter.name || page.title,
            ];

            if (page.path === "/") {
              let files = fs.readdirSync(resolve(__dirname, `../../../src/`));
              files = files.filter(
                (file) => /\.ts$/.test(file) && file[0] !== "_"
              );
              names = files.map((v) => v.substring(0, v.length - 3));
            }
            const { get_comments, content_params, get_realizes } =
              option.methods;
            return (
              page._strippedContent +
              "\r\n" +
              names
                .map((name) => {
                  const source = fs
                    .readFileSync(resolve(__dirname, `../../../src/${name}.ts`))
                    .toString();
                  // console.log(content);

                  const comments = get_comments(source);
                  const realizes = [
                    {
                      module: "Langnang",
                      fn: name,
                      text: "",
                      href: "",
                      src: `@langnang/js-func/src/${name}.ts`,
                      path: `@/src/${name}.ts`,
                      source: `https://github.com/langnang-package/js-func/blob/master/src/${name}.ts`,
                    },
                    ...get_realizes(comments),
                  ];
                  let content = "";

                  if (!comments["@name"]) return "";

                  name = (comments["@name"][0][0] || name).trim();

                  content += `## ${name}\r\n`;

                  if (comments["@description"]) {
                    const description = comments["@description"][0].join(" ");

                    content += `${description}\r\n`;
                  }

                  if (comments["@tag"]) {
                    const tags = comments["@tag"];

                    content +=
                      "\r\n" +
                      tags.reduce(
                        (t, v) =>
                          t +
                          `![${v[1]}](https://img.shields.io/badge/-${v[0]}-blue)\r\n`,
                        ""
                      ) +
                      "\n\n";
                  }

                  if (comments["@tip"]) {
                    let tip = "\r\n::: ";
                    if (
                      ["warning", "danger", "details"].includes(
                        comments["@tip"][0][0]
                      )
                    ) {
                      tip += comments["@tip"][0][0] + "" + "\r\n";
                      tip += comments["@tip"][0].slice(1).join(" ");
                    } else {
                      tip += "tip\r\n";
                      tip += comments["@tip"][0].join(" ");
                    }
                    tip += "\r\n:::\r\n";
                    content += tip;
                  }

                  if (comments["@syntax"]) {
                    syntax = comments["@syntax"][0].join(" ");
                    content += `\r\n**语法**\r\n\`\`\`js\r\n${syntax}\n\`\`\`\r\n`;
                  }
                  if (slots[name] && slots[name].syntax)
                    content += slots[name].syntax;

                  content += content_params(comments);

                  if (comments["@returns"]) {
                    const returns = comments["@returns"] || [];
                    content += `\r\r**返回值**\r\n\r\n_${returns[0][0]
                      .replace("{", "(")
                      .replace("}", ")")}_: ${returns[0]
                      .slice(1)
                      .join(" ")}\r\n`;
                  }
                  if (
                    fs.existsSync(
                      resolve(resolve(__dirname, `../../../test/${name}.tsx`))
                    )
                  ) {
                    content += `\r\r**示例**\r\n\n[\`@langnang/js-func/test/${name}.tsx\`](https://github.com/langnang-package/js-func/blob/master/test/${name}.tsx)\r\n\n<<< @/test/${name}.tsx\r\n`;
                  }

                  if (comments["@tutorial"]) {
                    const tutorials = comments["@tutorial"] || [];
                    content += `\r\r**参考**\r\n\r\n${realizes
                      .filter((v) => v.module != "Langnang")
                      .reduce(
                        (t, v) => t + `- [${v.text}](${v.href})\n`,
                        ""
                      )}\r\n`;
                  }

                  content += `\r\r**实现**\r\n`;

                  content += `\r\n<CodeSwitcher :languages="{${realizes
                    .filter((v) => v.module != "MDN")
                    .reduce(
                      (t, v, i) => t + `${name}_${i}:'${v.module}.${v.fn}', `,
                      ""
                    )}}">\r\n`;

                  content += realizes
                    .filter((v) => v.module != "MDN")
                    .reduce(
                      (t, v, i) =>
                        t +
                        `\r\n<template v-slot:${name}_${i}>\r\n\r\n[${
                          v.src ? `\`${v.src}\`` : ""
                        }](${v.source})\r\n\r\n${
                          v.path ? `<<< ${v.path}` : ""
                        }\r\n\r\n</template>\r\n`,
                      ""
                    );

                  content += `\r\n</CodeSwitcher>`;

                  // console.log(content);
                  return content;
                })
                .join("\n\n")
            );
          },
          methods: {
            // 提取字符串中注释内容，并转为对象格式
            get_comments(string) {
              let comments = {};
              const splits = string
                .split("\r\n")
                .filter((v) => /^ \* /.test(v));

              splits.forEach((item) => {
                const split = item.split(" ");
                const key_index = split.indexOf("*") + 1;
                let sub_key_index = key_index;
                let key = split[sub_key_index];
                while (key == "*") {
                  sub_key_index++;
                  key = split[sub_key_index];
                }
                if (sub_key_index > key_index) {
                  comments[key][comments[key].length - 1].push(
                    split.slice(sub_key_index + 1)
                  );
                } else {
                  if (!comments[key]) {
                    comments[key] = [];
                  }
                  comments[key].push(split.slice(key_index + 1));
                }
              });
              return comments;
            },
            comment_string_to_json() {},
            build_title(comments, key = "@name") {
              return `\r\n## ${comments[key][0][0]}\r\n`;
            },
            build_description(comments, key = "@description") {
              return `\r\n${comments[key][0][0]}\r\n`;
            },
            build_tags(comments, key = "@tag") {},
            build_syntax(comments, key = "@syntax") {},
            // 注释中的参数对象转Markdown字符串
            content_params(comments, key = "@param") {
              if (!comments[key]) return "";
              const li_param = (item, tab = 0) => {
                let len = item.length;
                let text = "";
                while (typeof item[len - 1] !== "string") {
                  text = li_param(item[len - 1], tab + 1) + text;
                  len--;
                }
                const type_index = 0;
                const arg_start_index = 1;
                const arg_end_index =
                  item.findIndex((v) => /.+\]$/.test(v)) == -1
                    ? 1
                    : item.findIndex((v) => /.+\]$/.test(v));

                const param_str = `- \`${item
                  .slice(arg_start_index, arg_end_index + 1)
                  .join(" ")}\`_${item[type_index]
                  .replace("{", "(")
                  .replace("}", ")")}_: ${item
                  .slice(arg_end_index + 1, len)
                  .join(" ")}\n`;
                let tab_str = "";
                while (tab > 0) {
                  tab_str += "  ";
                  tab--;
                }
                text = tab_str + param_str + text;
                return text;
              };

              const params = comments["@param"] || [];
              let content = `\r\r**参数**\r\n\n${params.reduce(
                (t, v) => t + li_param(v),
                ""
              )}`;
              return content;
            },
            build_returns(comments, key = "@returns") {},
            build_test(comments, key = "@name") {},
            // 匹配参考链接
            get_realizes(comments, key = "@tutorial") {
              if (!comments[key]) return [];
              const tutorials = comments[key]
                .map((v) => v[0])
                .reduce((t, href) => {
                  const item = {};
                  if (/developer\.mozilla\.org/.test(href)) {
                    item.module = "MDN";
                    item.href = href;
                    item.source = ``;
                    item.text = `${href.split("/")[9]}.prototype.${
                      href.split("/")[10]
                    }() - JavaScript | MDN`;
                    t.push(item);
                  } else if (/www\.lodashjs\.com/.test(href)) {
                    item.href = href;
                    item.module = "Lodash";
                    item.fn = href
                      .substring("https://www.lodashjs.com/docs/lodash.".length)
                      .trim();
                    item.path = `@/node_modules/lodash/${item.fn}.js`;
                    item.src = `lodash/${item.fn}.js`;
                    item.source = `https://github.com/lodash/lodash/blob/master/${item.fn}.js`;
                    item.text = `lodash.${item.fn} | Lodash`;
                    t.push(item);
                  } else if (/underscorejs\.net/.test(href)) {
                    item.href = href;
                    item.module = "Underscore";
                    item.fn = href
                      .substring("https://underscorejs.net/#".length)
                      .trim();
                    item.path = `@/node_modules/underscore/modules/${item.fn}.js`;
                    item.src = `underscore/modules/${item.fn}.js`;
                    item.source = `https://github.com/jashkenas/underscore/tree/master/modules/${item.fn}.js`;
                    item.text = `underscore.${item.fn} | Underscore`;
                    t.push(item);
                  }
                  return t;
                }, []);
              return tutorials;
            },
            build_reference(comments, key = "@tutorial") {},
          },
        },
      },
    },
  ],
];
