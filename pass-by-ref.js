// Primitive value pass by value
function multiply(x, y) {
    const product = x * y;
    return product;
}

const a = 5,
    b = 7;
const result = multiply(a, b);
// console.log(result);

// Non-primitive value pass by reference
const user1 = { name: "Manik", balance: 2000 };
const user2 = { name: "Roton", balance: 1000 };

function totalMoney(person1, person2) {
    person1.balance = 0; // will change inside the original object
    person2.balance = person2.balance / 2; // will change too
    const total = person1.balance + person2.balance;
    return total;
}
const balance = totalMoney(user1, user2);
console.log(balance);
console.log("after function call", { user1, user2 });
