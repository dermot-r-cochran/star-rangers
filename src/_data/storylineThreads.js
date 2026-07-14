const { STORYLINE_THREADS } = require("../../lib/storyline-threads");
const { getContentFilter, isThreadIncluded } = require("../../lib/content-filter");

// A thread flagged `private: true` (lib/storyline-threads.js) must not
// appear in the /threads/ index listing (src/threads/index.md, which reads
// this data file directly) on a build that hasn't opted into it - the same
// veto lib/content-filter.js's isThreadIncluded already applies to that
// thread's own chapters/characters/lore/etc, just at the listing level too,
// so a private thread's name and description don't leak even though
// nothing links to it.
module.exports = function () {
  const filter = getContentFilter();
  return STORYLINE_THREADS.filter((thread) => isThreadIncluded(thread.id, filter));
};
