const pi = 3.14159;
let radius;

document.getElementById("submitR").onclick = function(){
radius = document.getElementById("myText").value;
radius = Number(radius);
console.log(Number(radius));
document.getElementById("myH3").textContent = radius + "cm";
}