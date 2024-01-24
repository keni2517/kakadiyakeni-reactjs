// Calculate the power of a number using a while loop

    {
        let p = 1;
        let i = 1;
        while (i <= 10) {
            p=i*i*i;
            i++;
            console.log(p);
        } 
        
    }

//Calculate the power of a number using a Do-while loop

{
    let p = 1;
    let i = 1;
    do{
        p=i*i*i;
        i++;
        console.log(p);
    } while (i <= 10) ;
    
}

//Calculate the power of a number using a for loop


{
    let p = 1;
    let i = 1;
    for(i=1 ; i<=10 ;i++){
        p=i*i*i;
        console.log(p);
    }  
}