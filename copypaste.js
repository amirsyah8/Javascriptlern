function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched from server");
        callback("Data content");
    }, 3000);
}

fetchData((data) => {
    console.log("Received:", data);
});
