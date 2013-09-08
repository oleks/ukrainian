function shuffle(arr) {
  var shuffled = arr.slice(0); // Copy

  // Fisher-Yates
  for (var i = shuffled.length - 1; i > 1; --i) {
    j = Math.floor(Math.random() * i);
    var x = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = x;
  }
  return shuffled;
};

function removeAllChildren(element) {
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }
}

