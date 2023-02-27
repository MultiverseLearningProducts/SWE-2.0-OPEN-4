function sumOfTwo(num1, num2) {
    return num1 + num2
}

function strReverse(str) {
    return str.split('').reverse().join('') 
}

function checkEmail(email) {
    //split the string
    //find the index of the @ sign
    //compare email.slice(idxOf@Sign) === '@gmail.com
    const idxOfAt = (email.split('').indexOf('@')) ? email.split('').indexOf('@') : false

    if(idxOfAt) {
        return email.slice(idxOfAt) === '@gmail.com'
    } 

    return false
}

module.exports = {
    sumOfTwo,
    strReverse,
    checkEmail
}
