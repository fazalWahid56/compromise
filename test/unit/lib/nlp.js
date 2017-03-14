var nlp;
if (typeof window !== undefined) {
  // nlp = require('../../../src/index');
  nlp = require('../../../demo/builds/compromise');
} else {
  nlp = window.nlp;
  alert('browser');
}

module.exports = nlp;
