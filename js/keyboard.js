var sorted_alphabet = [
  "А","Б","В","Г","Ґ","Д","Е","Є","Ж","З","И","І","Ї","Й","К","Л","М","Н","О",
  "П","Р","С","Т","У","Ф","Ц","Ч","Ш","Щ","Ь","Ю","Я"];

var qwerty_alphabet = [
  ["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ї"],
  ["Ф","І","В","А","П","Р","О","Л","Д","Ж","Є","Ґ"],
  ["Я","Ч","С","М","И","Т","Ь","Б","Ю"]
];

var keyboard = document.getElementById("keyboard");

var type = document.createElement("div");
type.innerHTML += "<a href=\"#\" onclick=\"set_sorted_keyboard()\">Sorted</a>";
type.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
type.innerHTML += "<a href=\"#\" onclick=\"set_qwerty_keyboard()\">QWERTY</a>";
keyboard.appendChild(type);

var keys = document.createElement("div");
keyboard.appendChild(keys);

function append_keys(list) {
  for (var i = 0; i < list.length; ++i) {
    var letter = list[i];
    var key = document.createElement("input");
    key.setAttribute("onclick", "takeInput(\"" + letter + "\");");
    key.setAttribute("type", "button");
    key.setAttribute("value", letter);
    keys.appendChild(key);
  }
}

function set_sorted_keyboard() {
  removeAllChildren(keys);
  append_keys(sorted_alphabet);
}

function set_qwerty_keyboard() {
  removeAllChildren(keys);
  append_keys(qwerty_alphabet[0]);
  var br = document.createElement("br");
  keys.appendChild(br);
  append_keys(qwerty_alphabet[1]);
  var br = document.createElement("br");
  keys.appendChild(br);
  append_keys(qwerty_alphabet[2]);
}

set_qwerty_keyboard();

