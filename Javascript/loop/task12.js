// Check if a number is prime using a for loop and break statement

{
    let i,n = 5;
    for (i = 2; i <= n; i++) {

        if (n%i == 0) {
            break;
        }

        console.log(i);
    }
}