const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItBracketedSpans = require("markdown-it-bracketed-spans");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets/img/');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');

  // Add support for YAML data files
  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents));

  const markdownLib = markdownIt({ html: true }).use(markdownItBracketedSpans).use(markdownItAttrs);
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