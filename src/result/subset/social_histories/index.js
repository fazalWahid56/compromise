'use strict';
const Text = require('../../index');

class Social_histories extends Text {
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
    r = r.match('#Social_histories+');
    if (typeof n === 'number') {
      r = r.get(n);
    }
    return r;
  }
}

module.exports = Social_histories;
