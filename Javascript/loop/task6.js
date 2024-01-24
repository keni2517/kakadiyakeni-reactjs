// Calculate factorial of a number using a while loop

{
    let n = 5;
    let fact = 1;
    let i = 1;
    console.log("Factorial number");
    while (i <= n) {
        fact = fact * i;
        i++;
    }
    console.log(fact);
}

// Calculate factorial of a number using a Do-while loop

{
    let n = 4;
    let fact = 1;
    let i = 1;
    console.log("Factorial number");
    do {
        fact = fact * i;
        i++;
    } while (i <= n);
    console.log(fact);
}

// Calculate factorial of a number using a for loop

{
    let n = 3;
    let fact = 1;
    let i;
    console.log("Factorial number");
    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(fact);
}

