if (true) {
    const data = true;
    // console.log("inside the if block", data);
}
// console.log(data);

// while(true) {
//     //
// }

for (const num of [2, 3, 4]) {
    //
}

function doMath(a, b) {
    // function (local) scope
}
function doMath2(a, b) {
    // function (local) scope
    console.log(doubleIt(a));
    function doubleIt(x) {
        return x * 2;
    }
}
// doMath2(5, 6);

// ============================================================
const variable = "value"; // Global Variable (useable everywhere in the code)
console.log(variable); // ✅ valid access
function doSomething() {
    console.log(variable); // ✅ valid access
}
doSomething();
if (true) {
    console.log(variable); // ✅ valid access
}
for (const val in ["a", "b", "c"]) {
    console.log(variable); // ✅ valid access
}

function myFunction(a) {
    console.log(a); // ✅ valid access
    const result = a + 2;
    console.log(result); // ✅ valid access
    if (true) {
        console.log(result); // ✅ valid access
    }
}
myFunction();
// console.log(a); // ❌ invalid access outside function scope
// console.log(result); // ❌ invalid access outside function scope

// console.log(name); // ❌ invalid access outside function scope
// console.log(result); // ❌ invalid access outside condition scope
function doThis() {
    const name = "Abir";
    console.log(name); // ✅ valid access
    // console.log(result); // ❌ invalid access outsite if condition scope
    if (true) {
        const result = 2;
        console.log(result); // ✅ valid access
    }
}
doThis();
// console.log(number); // ❌ invalid access outside loop scope
for (const number of [1, 2, 3, 4]) {
    console.log(number); // ✅ valid access
}
{
    const data = null;
    console.log(data); // ✅ valid access
}
// console.log(data); // ❌ invalid access outside {} (bracket) scope
