// Find the first odd number in a sequence using a while loop and break statment


{
    let Number = 6;

    while (Number > 0) {
        if (Number % 2 !== 0) {
            console.log(`First odd number in the sequence: ${Number}`);
            break;
        }
        Number++;
    }
}