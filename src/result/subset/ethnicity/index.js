'use strict';
const Text = require('../../index');

class Ethnicity extends Text {
  data() {
    return this.list.map((ts) => {
      return {
        text: ts.out('text'),
        normal: ts.out('normal'),
      };
    });
  }
  static find(r, n) {
    r = r.splitAfter('#Comma');
    r = r.ngrams().unigrams(0).match('#Ethnicity+');
    if (typeof n === 'number') {
      r = r.get(n);
    }
    return r;
  }
}

module.exports = Ethnicity;
