// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1); - append = masukkan last element dalam document.body
//document.body.prepend(newH1); // - prepend = masukkan dalam elemet pertama dalam document.body
//document.getElementById("box1").append(newH1);
const box3 = document.getElementById("box3");
document.body.insertBefore(newH1, box3);
//sifir document.body.insertBefore(newElement, currentElement);

// REMOVE HTML ELEMENT