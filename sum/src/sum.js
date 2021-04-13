function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  let result = 0;
  // for(let i = 0; i < numbers.length; i++) {
  //   result += numbers[i];
  // }

  // return result;
  return numbers.reduce((acc, current) => acc + current, 0);
  // numbers.forEach( n => {
  //   result += n;
  // });

  return result;
}

exports.sum   = sum;
exports.sumOf = sumOf;