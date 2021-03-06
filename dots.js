var clear = function() {
  slate.innerHTML = '';
};

var add_dot = function(e) {
  console.log(e);
  var dot = document.createElementNS(NS, "circle");
  dot.setAttribute("cx", e.offsetX);
  dot.setAttribute("cy", e.offsetY);
  dot.setAttribute("r", 20);
  dot.setAttribute("fill", "lightsteelblue");
  slate.appendChild(dot);
  if (lastX) { //if a dot has been drawn before
    var line = document.createElementNS(NS, "line");
    line.setAttribute("x1", e.offsetX);
    line.setAttribute("y1", e.offsetY);
    line.setAttribute("x2", lastX);
    line.setAttribute("y2", lastY);
    line.setAttribute("stroke", "black");
    slate.appendChild(line);
    console.log("I WENT");
  }
  lastX = e.offsetX;
  lastY = e.offsetY;
};

var lastX = null;
var lastY = null;
var NS = "http://www.w3.org/2000/svg";
var slate = document.getElementById("slate");
var button = document.getElementById("clear");

slate.addEventListener("click", add_dot);
button.addEventListener("click", clear);
