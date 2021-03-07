module.exports = function reverse(n) {
    let positive = Math.abs(n); // changing negative to positive values
    let arr = Array.from(positive.toString()).map(Number); //making array of a digits
    console.log(arr);
    let revarr = arr.reverse(); // reversing array
    console.log(revarr);
    let joined = revarr.join(""); // joining array
    return joined;
};

// let str = n.toString();
// let first = str.split("");
// let second = first.reverse("");
// let third = second.join("");
// let result = Number(third);
// return result;

// let first = str.split("");
// let second = first.reverse("");
// let third = second.join("");
//   return third;
