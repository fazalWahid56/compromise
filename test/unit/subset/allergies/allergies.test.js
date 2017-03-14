var test = require('tape');
var nlp = require('../../lib/nlp');

//list of famous names taken from https://gate.ac.uk/gate/plugins/ANNIE/resources/gazetteer/
var tests = {
  'cipro':'cipro' ,
   'cefepime':'cefepime',
   'topamax':'topamax',
   'cephalosporin':'cephalosporin',    
};

test('Allergies:', function (t) {
  Object.keys(tests).forEach(function(k) {
    var str = nlp(k).allergy().out('text');
    var msg = '\'' + k + '\' is an allergy - - have: \'' + str + '\'';
    t.equal(str, k, msg);
  });
  t.end();
});
