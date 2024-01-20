{
    var number1 = 40;
    var number2 = 20;
    var Total = number1 + number2;
    console.log(Total);
}

{
    var newelement = document.createElement("h3");
    newelement.textContent="hello javascript";
    document.body.appendChild(newelement);
    
    var newelement=document.createElement("marquee" , Option);
    newelement.textContent="hello css";
    document.body.appendChild(newelement);
    
    var newelement=document.createElement("h1");
    newelement.textContent="hello";
    document.body.appendChild(newelement);
}

{
    var _nameone = 20 + 20 + '5' +20 + 20 +20 *2 -50 +'5';
    console.log(_nameone);
    console.log(typeof(_nameone));
}

{
    var one = 20
    var two = 40

    var three = "one 'two'"
    console.log(three);

    var four  = 'one "two"'
    console.log(four);

    var five = `'one' "two"`


    console.log(five);

    var six = `${one} + ${two}`
    console.log(six);

    console.log(one);
}
