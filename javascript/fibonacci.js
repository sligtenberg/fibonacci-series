function fibonacci(num) {
  if (num === 0) return 0
  else if (num === 1) return 1

  let p = [0, 1]
  while (p.length <= num) {
    p.push(p[p.length-1] + p[p.length-2])
  }
  return p[p.length-1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(1));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
