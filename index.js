const pi = 3.14159;
let radius;
let cir;

//radius = window.prompt('ENter r :');


cir = 2 * pi * radius;

document.getElementById("submitR").onclick = function(){
    radius = document.getElementById("myText").ariaValueMax;
    radius = Number(radius);
    cir = 2 * pi * radius;
    document.getElementById("myH3").textContent = cir + "cm";
}