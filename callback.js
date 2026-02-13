// callback
function pakhiBhai(callMe, pakhi, patha) {
    if (pakhi) {
        console.log(callMe);
        callMe(pakhi);
    } else {
        callMe(patha);
    }
}
function callSomeone(person) {
    console.log("calling", person);
}
// callSomeone('Haba');

pakhiBhai(callSomeone, false, "Habibi");

function callbackFunction(number) {
    return number * 2;
}
const result = [2, 5, 7].map(callbackFunction);
console.log(result); // [ 4, 10, 14 ]
