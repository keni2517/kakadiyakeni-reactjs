// Skip numbers divisible by 5 using a do-while loop and continue statement
{
    let number = 1;

    do {

        if (number % 5 === 0) {
            number++;
            continue;
        }


        console.log(number);


        number++;
    } while (number <= 20);
}