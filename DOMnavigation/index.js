const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
	const firstChild = ulElement.firstElementChild;
	firstChild.style.backgroundColor = "yellow";
});