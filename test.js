function assert(value, desc) {
  var li = document.createElement("li");
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("results").appendChild(li);
}

function report(message) {
    console.log(message);
}

function fail(desc) {
  var li = document.createElement("li");
  li.className = "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("results").appendChild(li);
}

function pass(desc) {
  var li = document.createElement("li");
  li.className = "pass";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("results").appendChild(li);
}
