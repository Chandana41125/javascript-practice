
// -----------------------------------
// 3a. Create the text 'My name is:' as a string
'My name is: Chandana S';

// -----------------------------------
// 3b. Create your name as a string
'Chandana';

// -----------------------------------
// 3c. Using concatenation, add the 2 strings
'My name is: ' + 'Chandana';

// -----------------------------------
// 3d. Calculate total cost using concatenation
'Total cost: $' + (5 + 3);

// -----------------------------------
// 3e. Same as 3d using template literal
`Total cost: $${5 + 3}`;

// -----------------------------------
// 3f. Display using alert
alert(`Total cost: $${5 + 3}`);

// -----------------------------------
// 3g. Calculate using cents
'Total cost: $' + (599 + 295) / 100;

// -----------------------------------
// 3h. Template literal (cents)
`Total cost: $${(599 + 295) / 100}`;

// -----------------------------------
// 3i. Display using alert
alert(`Total cost: $${(599 + 295) / 100}`);

// -----------------------------------
// 3j. Multi-line string
alert(`Total cost: $${(599 + 295) / 100}
Thank you, come again!`);

// ===================================
// 🚀 Challenge Exercises

// -----------------------------------
// 3k. Items total
`Items (${2 + 2}): $${((2095 + 799) * 2) / 100}`;

// -----------------------------------
// 3l. Shipping & handling
`Shipping & handling: $${(499 + 499) / 100}`;

// -----------------------------------
// 3m. Total before tax
`Total before tax: $${(((2095 + 799) * 2) / 100) + ((499 + 499) / 100)}`;

// -----------------------------------
// 3n. Estimated tax (10%)
`Estimated tax (10%): $${Math.round(((((2095 + 799) * 2) + (499 + 499)) * 0.1)) / 100}`;