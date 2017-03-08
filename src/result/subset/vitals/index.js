'use strict';
const Text = require('../../index');

class Vitals extends Text {
  data() {
    return this.list.map((ts) => {
      return {
        text: ts.out('text'),
        normal: ts.out('normal'),
      };
    });
  }
  static find(r, n) {
    // var topics = r.topics().all('#Value');
    r = r.splitAfter('#Comma');
    r = r.match('#Vitals+ .?');
    if (typeof n === 'number') {
      // topics = topics.get(n);
      r = r.get(n);

    }
    
    return r
  }
}

module.exports = Vitals;
