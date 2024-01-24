//Multiplication Table Using While Loop


{
    let j = 6;
    let i = 1;

    while (i <= 10) {
        let result = j * i;
        console.log(`${j} * ${i} = ${result}`);
        i++;
    }

}

//Multiplication Table Using Do-While Loop

{
    let j = 7;
    let i = 1;

   do {
        let result = j * i;
        console.log(`${j} * ${i} = ${result}`);
        i++;
    }while (i <= 10) ;
}

//Multiplication Table Using For Loop

{
    let j = 8;

   for(i=1 ; i<=10 ; i++){
        let result = j * i;
        console.log(`${j} * ${i} = ${result}`);
    }
}