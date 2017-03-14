var test = require('tape');
var nlp = require('../../lib/nlp');

//list of famous names taken from https://gate.ac.uk/gate/plugins/ANNIE/resources/gazetteer/
var tests = {
  'hives':'hives',
	'nasal congestion':'nasal congestion',
	'rash':'rash',
	'watery or itchy eyes':'watery or itchy eyes',
	'headache':'headache',   
};

test('Allergy Reactions:', function (t) {
  Object.keys(tests).forEach(function(k) {
    var str = nlp(k).reactions().out('text');
    var msg = '\'' + k + '\' is an allergy reaction - - have: \'' + str + '\'';
    t.equal(str, k, msg);
  });
  t.end();
});
