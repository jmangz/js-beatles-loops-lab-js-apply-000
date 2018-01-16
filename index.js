function theBeatlesPlay(musicians, instruments) {
  var result = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    result.push(`${musician} plays ${instrument}`);
  }

  return result;
}

function johnLennonFacts(facts) {
  var result = [];
  var i = 0;

  while (result.length < facts.length) {
    result.push(facts[i] + '!!!');
    i++;
  }

  return result;
}
