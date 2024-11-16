const pi = 3.14159;
let radius;

document.getElementById("submitR").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    //console.log(Number(radius));

    if (isNaN(radius) || radius <= 0) {
        document.getElementById("myH3").textContent = "Please enter a valid radius.";
    } else {
        document.getElementById("myH3").textContent = radius + " cm"; // Use the updated value
        console.log("Radius is:", radius); // Log the radius for debugging
    }};
console.log("Radius is:", radius);