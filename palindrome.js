function palindrome(checkPalindrome) {

    let removeChar = checkPalindrome.split("").reverse().join("");

    if (checkPalindrome.toLowerCase() === removeChar.toLowerCase()) {

        console.log(checkPalindrome + " is a Palindrome");

    } else {

        console.log(checkPalindrome + " is not a Palindrome");

    }
}
console.log(palindrome('Madam'));
console.log(palindrome('2,3,4,3,2'));
console.log(palindrome('Star Wars'));
console.log('7,10,7,8,9');
