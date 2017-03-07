'use strict';
const Text = require('../../index');

class Vital_signs extends Text {
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
    r = r.match('#Vital_signs+ .?');
    if (typeof n === 'number') {
      // topics = topics.get(n);
      r = r.get(n);

    }
    
    return r
  }
}

module.exports = Vital_signs;
