// The Plates page exists only on an edition with an approved selection
// (lib/plates.js); elsewhere it is not built and the nav link is hidden.
const { platesFor } = require("../../lib/plates");

module.exports = {
  eleventyComputed: {
    permalink: (data) => (platesFor(data.edition && data.edition.id).length ? "/plates/" : false)
  }
};
