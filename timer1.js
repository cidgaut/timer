process.stdout.write('\x07');

//make alarm sound when command line prompts are given (unlimited)
//EX: node timer1.js 10 3 5 15 9 

//command line prompt seen in week 1

//edge case: no number given 

//edge case: number is negative

//edge case: input is not a number 

/* FOR REFERRENCE
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}*/