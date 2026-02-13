function counter(name) {
    let count = 0;
    return function () {
        count++;
        console.log(name, "inner func", count);
    };
}

const innerFunc = counter("Rahim");
innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
const innerFunc2 = counter("Karim");
innerFunc2();
innerFunc();
innerFunc2();
innerFunc();
innerFunc2();
