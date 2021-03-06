'use strict';
const Text = require('../../../index');

class Type extends Text {
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
    // r = r.ngrams().bigrams(0).match('#Type+');
    r = r.match('#Type+ .?');

    if (typeof n === 'number') {
      r = r.get(n);
    }
    return r;
  }
}

module.exports = Type;
