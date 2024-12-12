const userName = "";
const welcomeMsg = document.getElementById("welcomeMsg");

welcomeMsg.textContent += userName ? userName : "Anonymous"; 