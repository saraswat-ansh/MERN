try {
    let no = "abc";
    
    if (typeof no !== "number") {
        throw new TypeError("Expected a number, but got a " + typeof no);
    }

    console.log(no / 0);
} 
catch (err) {
    if (err instanceof TypeError) {
        console.log("Handled TypeError:", err.message);
    } else {
        console.log("Handled Other Error:", err.message);
    }
}