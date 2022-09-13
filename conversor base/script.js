function decimalToBinary(decNumber){
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString='';
    while(number>0){
        rem = Math.floor(number%2);
        remStack.pushStack(rem);
        number = Math.floor(number/2);
    }

    while(!remStack.isEmptyStack()){
        binaryString+=remStack.popStack().toString();
    }
    return res.innerHTML = `<h2>${binaryString}</h2>`;
}