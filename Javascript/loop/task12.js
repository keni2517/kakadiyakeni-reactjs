// Check if a number is prime using a for loop and break statement

{
    let i,n = 11;
    for (i = 2; i < n; i++) {

        if (n%i == 0) {
            console.log(`${i} number: ${n} is not prime`);
            break;
        }
    }
    if(i == n) 
    {
        console.log(`number: ${n} is prime`);
    }
}