var test = require('tape');
var nlp = require('../../lib/nlp');

//list of famous names taken from https://gate.ac.uk/gate/plugins/ANNIE/resources/gazetteer/
var tests = {
  'mild':'mild',	
	'moderate':'moderate',
	'severe':'severe',
	'fatal':'fatal',  
};

test('Allergy severity:', function (t) {
  Object.keys(tests).forEach(function(k) {
    var str = nlp(k).severity().out('text');
    var msg = '\'' + k + '\' is an allergy severity - - have: \'' + str + '\'';
    t.equal(str, k, msg);
  });
  t.end();
});
