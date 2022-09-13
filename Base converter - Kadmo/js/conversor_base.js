function getValues() {
    const decimal = document.getElementById("decimal").value
    const base = document.getElementById("select").value
    return baseConverter(decimal, base)
}
function baseConverter(decNumber, base) {
    getValues.innerHTML = `result`;
    const remStack = new Stack()
    const digts = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem
    let baseString = ''
    if (!(base >= 2 && base <= 16)) {
        return ''
    }
    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }
    while (!remStack.isEmpty()) {
        baseString += digts[remStack.pop()]
    }
    document.querySelector("#result").innerHTML = baseString
}