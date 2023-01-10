function evaluate(expr) {
  let stack = [];
  let number = '';
  let operator = '+';
  for (let i = 0; i < expr.length; i++) {
      let char = expr[i];
      if (char === '+' || char === '-') {
          if (operator === '+') {
              stack.push(parseInt(number));
          } else {
              stack.push(-parseInt(number));
          }
          number = '';
          operator = char;
      } else {
          number += char;
      }
  }
  if (operator === '+') {
      stack.push(parseInt(number));
  } else {
      stack.push(-parseInt(number));
  }
  return stack.reduce((sum, num) => sum + num, 0);
}


const sumNum = 200;
let count = 0;

const digits = '9876543210';
const signs = ['', '+', '-'];
const atoms = digits.slice(0, 10).split('').map((d) => signs.map((x) => d + x));

for (let i = 0; i < Math.pow(3, 10); i++) {
    let indexes = i.toString(3).padStart(10, '0').split('').map((x) => parseInt(x));
    let expr = "";
    for (let j = 0; j < 10; j++) {
      expr += atoms[j][indexes[j]] + (j === 8 ? '' : signs[0]);
    }
    if (evaluate(expr) === sumNum) {
        console.log(`${expr} = ${sumNum}`);
        count++;
    }
}
console.log(`So, ${count} expressions for ${sumNum}`);
console.log(`Всего возможно ${count} комбинаций для числа ${sumNum}`)
