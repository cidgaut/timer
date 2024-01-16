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
  }, number * 1000);  //make input in milliseconds convert to seconds.
};
