function add() {
    console.log(arguments); // [Arguments] { '0': 5, '1': 8, '2': 1 } --> Array like object
    const params = [...arguments];
    return params.reduce((total, number) => total + number, 0);
}
// const result = add(2);
// const result = add(2, 4);
const result = add(5, 8, 1);
console.log(result);
