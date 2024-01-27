// Guess the number game using a while loop


{
    const number = 3;
    let x = 0 , num = prompt("Guess the number game \n we give you a 10 chance : ");  
    while(x<9)
    {
     x++;
      if(num == number )
      {
         document.write( "<hr>" +"Right number is you win : " + number);
         break;
      }
      document.write(x + ". " +"your chosen number is : " + num + "<br>");
      num = prompt("Guess the number game \n we give you a 10 chance : ");  
    }
 }