// Skip multiples of 3 using a while loop and continue statement

{
    let number = 1;

    while (number <= 20) {

        if (number % 3 === 0) {
            number++;
            continue;
        }


        console.log(number);


        number++;
    }
}