function main() {
    const unusedName = "unused name";
    let unusedAge = 69;

    functionFunction(2, 3);
    functionTwo(0.00);
}

function functionFunction(a, b) {
    const c = a / 0;

    if (true) {
        if (true) {
            if (true) {
                console.log(b);
            }
        }
    }
}

function functionTwo(a) {
    console.log("didn't use variable");
}

class UnusedClass {
    constructor() {
        this.brand = "";
        this.price = 1.25;
    }
}

// Wywołanie funkcji main
main();