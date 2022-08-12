import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const markdown = {
  options: {
    breaks: true,
  },
};

const site = lume({
  prettyUrls: false,
  server: {
    open: true,
  },
}, { markdown });

site
  .ignore("README.md")
  .ignore("src")
  .use(jsx());

export default site;
