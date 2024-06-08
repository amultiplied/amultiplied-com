module.exports = function (eleventyconfig) {
  eleventyconfig.addPassthroughCopy("./src/style.css");
  eleventyconfig.addPassthroughCopy("./src/darkmode.js");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
