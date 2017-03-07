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
    var topics = r.topics().all('#Value');
    if (typeof n === 'number') {
      topics = topics.get(n);

    }
    
    return topics
  }
}

module.exports = Vital_signs;
