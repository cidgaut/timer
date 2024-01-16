process.stdout.write('\x07');

//make alarm sound when command line prompts are given (unlimited)
//EX: node timer1.js 10 3 5 15 9 

//command line prompt seen in week 1 (node file.js are the first two in precess.argv.length)

//edge case: no input given 
if (process.argv.length <= 2) {
  console.log("No numbers provided.");
  process.exit(1);
}

//edge case: number is negative //edge case: input is not a number 
for (let i = 2; i < process.argv.length; i++) {
  const number = process.argv[i];

  if (isNaN(number) || number < 0) {
    console.log(`${process.argv[i]} invalid`)
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, number);

};

/* FOR REFERRENCE
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}*/

