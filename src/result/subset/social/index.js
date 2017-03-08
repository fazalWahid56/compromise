'use strict';
const Text = require('../../index');

class Social extends Text {
  data() {
    return this.list.map((ts) => {
      return {
        text: ts.out('text'),
        normal: ts.out('normal'),
      };
    });
  }
  static find(r, n) {
    // r = r.concat(r.splitAfter('#Comma'), ' ');
    r = r.splitAfter('#Comma');
    r = r.ngrams().unigrams(0).match('#Social+');
    if (typeof n === 'number') {
      r = r.get(n);
    }
    return r;
  }
}

module.exports = Social;
