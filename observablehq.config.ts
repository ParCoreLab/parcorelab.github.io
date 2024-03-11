// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "BeyondMoore",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  header: `
<div style="display: flex; align-items: center; gap: 0.5rem; height: 2.2rem; margin: -1.5rem -2rem 2rem -2rem; padding: 0.5rem 2rem; border-bottom: solid 1px var(--theme-foreground-faintest);">
   <h1>
     Beyond-Moore
   </h1>
   <div style="display: flex; flex-grow: 1; justify-content: space-between; align-items: baseline;">
      <span>
      </span>
      <span style="display: flex; align-items: baseline; gap: 0.5rem">
        <a target="_blank"><h4><span>About</span></h4></a>
        <a target="_blank"><h4><span>News</span></h4></a>
        <a target="_blank"><h4><span>Team</span></h4></a>
        <a target="_blank"><h4><span>Publications</span></h4></a>
      </span>
   </div>
</div>`,

  // "<div class=\"grid grid-cols-2\"><div><h1>Beyond-Moore</h1></div> <div><div>About</div><div class=\"grid grid-cols-auto\">Publications</div><div>Team</div><div>News</div></div></div>", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // root: "docs", // path to the source root for preview
  // output: "dist", // path to the output root for build
  search: true, // activate search
};
