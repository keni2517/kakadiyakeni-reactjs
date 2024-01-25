// Print a pattern using a for loop

{
    let i,j;
    for(i=1 ; i<=5; i++)
    {
        for(j=1; j<=3 ;j++)
        {
            document.write("*");
        }
        document.write("<br>");
    }
}

// Print a pattern using a while loop

{
    let i=1,j;
    while(i<=5)
    {
        j=1;
        while(j<=i)
        {
            document.write("*");
            j++;
        }
        document.write("<br>");
        i++;
    }  
}

// Print a pattern using a Do-while loop

{
    let i=1,j;
    do
    {
        j=1;
        do
        {
            document.write(j);
            j++;
        }while(j<=3);
        document.write("<br>");
        i++;
    } while(i<=5);
}