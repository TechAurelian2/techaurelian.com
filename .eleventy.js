const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');

  const markdownLib = markdownIt({ html: true }).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: '_site',
    }
  }
}