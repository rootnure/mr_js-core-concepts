let data;
data = 0; // zero (0) is falsy
data = ""; // empty string is falsy
data = " "; // empty string with space is truthy
data = "0"; // zero (0) as string is truthy
data = false; // falsy
data = true; // truthy
data = null; // falsy
data = {}; // truthy
data = []; // truthy
console.log(data);
if (data) {
    console.log("data is truthy");
} else {
    console.log("data is falsy");
}

// invers truthy or falsy
const value = "";
if (!value) {
    // !value --> false
    console.log(value, " is falsy");
}
const user = { name: "User", role: "user" };
if (!!user) {
    // !!user --> true
    console.log("user is present");
}
