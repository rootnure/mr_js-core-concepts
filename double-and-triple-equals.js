// Type Coersion (Type convert)

const ar = [1, 2, 3, 4];
const arr = ar;
const ob = { id: 1, name: "abc" };
const obj = ob;

// Double Equal (Compare only converted value)
console.log(2 == 2); //
console.log(1 == 2); //
console.log(true == 1); //
console.log(true == "1"); //
console.log(false == 0); //
console.log(null == undefined); //
console.log(0 == ""); //
console.log([] == ""); //
console.log({} == ""); //
console.log([] == {}); //
console.log(NaN == NaN); //
console.log([5] == "5"); //
console.log([5] == 5); //
console.log({} == {}); //
console.log([] == []); //
console.log(ar == arr);
console.log(ob == obj);

console.log("============Results Separator=============");

// Triple Equal (Compare not only Value but also Check Type)
console.log(2 === 2); // true
console.log(1 === 2); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log(null === undefined); // false
console.log(0 === ""); // false
console.log([] === ""); // false
console.log({} === ""); // false
console.log([] === {}); // some
