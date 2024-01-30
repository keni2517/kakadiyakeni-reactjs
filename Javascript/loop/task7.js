// Check if a word is a palindrome using a while loop


{
    let i , n=121 , reversedNumber = 0;
    let j = n;
    while(n != 0) 
    {
        i = n % 10;
        reversedNumber = reversedNumber * 10 + i ;
        n /= 10;
    }
    if(n == reversedNumber)
        console.log(reversedNumber);
    else
    {
        console.log("not a number");
    }
}

