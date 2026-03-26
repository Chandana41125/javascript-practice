// Lesson 2: Numbers and Math Practice

// 2a
console.log("2a:", 10 + 3 * 8 + 5); // 39

// 2b
console.log("2b:", (10 + 3 * 8 + 5) / 3); // 13

// 2c
console.log("2c:", 18.50 + 2 * 7.50); // 33.5

// 2d
console.log("2d:", (18.50 + 2 * 7.50) * 0.1); // 3.35

// 2e
console.log("2e:", (18.50 + 2 * 7.50) * 0.2); // 6.7

// 2f
console.log("2f:", (2095 + 799 + 1899) / 100); // 47.93

// 2g
console.log("2g:", ((2095 + 799 + 1899) / 100) + 4.99); // 52.92

// 2g (alternate way)
console.log("2g-alt:", (2095 + 799 + 1899 + 499) / 100); // 52.92

// 2h
console.log("2h:", Math.round(5292 * 0.1) / 100); // 5.29

// 2i
console.log(
  "2i:",
  ((2095 + 799 + 1899 + 499) / 100) + Math.round(5292 * 0.1) / 100
); // 58.21

// 2j
console.log("2j:", Math.floor(2.8)); // 2

// 2k
console.log("2k:", Math.ceil(2.2)); // 3

// 2l
console.log("2l:", (25 * 9 / 5) + 32); // 77

// 2m (wrong precedence example)
console.log("2m (wrong):", (86 - 32) * 5 / 9); // 68.22...

// 2m (correct)
console.log("2m (correct):", (86 - 32) * 5 / 9); // 30

// 2n
console.log("2n:", (-5 * 9 / 5) + 32); // 23