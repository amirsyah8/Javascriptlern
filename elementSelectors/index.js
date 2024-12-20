// element selectors = Methods used to target and manipulate HTML elements
//They allow you to select one or multiple HTML element
//from the DOM (Document Object Model)

// 1. document.getElementById() // ELEMENT OR NULL
// 2. document.querySelectorAll() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector() // ELEMENT OR NULL
// 5. document.querySelectorAll() // NODELIST

const fruits = document.getElementsByClassName("fruits");
Array.from(fruits).forEach(fruit => {
fruit.style.backgroundColor = "red";
});

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

Array.from(h4Elements).forEach (h4Element => {
    h4Element.style.backgroundColor = "yellow";
});
    
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});