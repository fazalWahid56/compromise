var test = require('tape');
var nlp = require('../../lib/nlp');

//list of famous names taken from https://gate.ac.uk/gate/plugins/ANNIE/resources/gazetteer/
var tests = {
  'allergy to substance':'allergy to substance',
   'drug allergy':'drug allergy',
   'drug intolerance':'drug intolerance',
   'food allergy':'food allergy',
   'propensity to adverse reactions':'propensity to adverse reactions',
   'propensity to adverse reactions to drug':'propensity to adverse reactions to drug',
   'propensity to adverse reactions to food':'propensity to adverse reactions to food',
   'propensity to adverse reactions to substance':'propensity to adverse reactions to substance', 
};

test('Allergy type:', function (t) {
  Object.keys(tests).forEach(function(k) {
    var str = nlp(k).type().out('text');
    var msg = '\'' + k + '\' is an allergy type - - have: \'' + str + '\'';
    t.equal(str, k, msg);
  });
  t.end();
});
