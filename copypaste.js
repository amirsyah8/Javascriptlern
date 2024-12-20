function test() {
    console.log(this);  // `this` merujuk pada objek global (window di browser)
}

test();  // `this` akan merujuk ke `window` di browser
