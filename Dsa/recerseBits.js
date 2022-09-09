let n = 11111111111111111111111111111101;
var reverseBits = function(n) {
    let bitwise = n.toString(2).split('').reverse();
    return bitwise.push.apply(bitwise, new Array(32 - bitwise.length).fill(0)) && parseInt(bitwise.join(''),2);

};
reverseBits(n)
console.log(bitwise)