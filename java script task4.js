let a = [1, 0, 2, 3, 0, 4, 5, 0];
let n = a.length;
let zeros = 0;
for (let i = 0; i < n; i++) {
  if (a[i] == 0) zeros++;
}

for (let i = n - 1; i >= 0; i--) {
  if (a[i] === 0) {
    if (i + zeros < n) {
      a[i + zeros] = 0;
    }
    zeros--;
    if (i + zeros < n) {
      a[i + zeros] = 0;
    }
  } else {
    if (i + zeros < n) {
      a[i + zeros] = a[i];
    }
  }
}

console.log(a);
console.log('\n');
let input = [5, 10, 20, 2, 0, 33, 100, 90];
let output = [];

for (let num of input) {
  output.push(num);
  if (num % 5 === 0) {
    output.push(num / 2);
  }
}

console.log(output);