// Generate the Fibonacci sequence using a while loop

{
    let i = 1;
    let a = 0;
    let n = 5;
    let b = 1;
    let c;
    console.log("Fibonacci sequence:");
    while (i<=n)
    {
        c = a+b;
        a = b;
        b = c;
        console.log(a);
        i++;
    }
}


// Generate the Fibonacci sequence using a Do-while loop

{
    let i = 1;
    let a = 0;
    let n = 5;
    let b = 1;
    let c;
    console.log("Fibonacci sequence:");
    do
    {
        c = a+b;
        a = b;
        b = c;
        console.log(a);
        i++;
    }  while (i<=n); 
}

//Generate the Fibonacci sequence using a for loop

{
    let i = 1;
    let a = 0;
    let n = 5;
    let b = 1;
    let c;
    console.log("Fibonacci sequence:");
    for(i=1; i<=n ; i++)
    {
        c = a+b;
        a = b;
        b = c;
        console.log(a);
    } 
}