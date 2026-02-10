/**
 * null --> value yet not present
 * --------------------------------
 * undefined --> Not defined
 * Different ways of getting undefined
 * 1. Uninitialized Variables
 * 2.1. Functions with No Return Statement
 * 2.2. Functions that Return Nothing
 * 2.3. Functions with a Missing Arguments
 * 3. Accessing Array Elements Out of Bounds
 * 4. Deleted or Never-Defined Variables
 * 5. Accessing a Missing Object Property
 * 6. Destructuring with Missing Property
 * 7. Emplicitely Assigned undefined
 */
const user = null; // no user is present
// #1
let money;
// console.log(money);

// #2.1
function total(a, b) {
    console.log(a, b);
    const sum = a + b;
    console.log(sum);
}

// total(); // 2.3
// total(5);
// total(5, 7);
// console.log(total(5, 7));

// #2.2
function total2(a, b) {
    console.log("values of params", a, b);
    if (a === undefined || b === undefined) {
        return;
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }
}
// console.log(total2(3, 6));

const numbers = [33, 12, 83, 68];

// #3
// console.log(numbers[100]);

const phone = { brand: "Nokia", price: 10500 };
// #4
delete numbers[2];
delete phone.brand;
// console.log(phone.brand);
// console.log(numbers[2]);

// #5
// console.log(phone.price); // 10500
// console.log(phone.model); // undefined

// #6
const { storage } = phone;
// console.log(storage);

// #7
const val = undefined; // not recommended
// console.log(val);
const member = { name: "Guest", role: undefined };
console.log(member.role);
