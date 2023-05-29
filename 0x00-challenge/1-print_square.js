#!/usr/bin/node
/*
    Print a square on the terminal with the character "#"
    The square size is the first argument of the program
*/

if (process.argv.length <= 2) {
  process.stderr.write("Missing argument\n");
  process.stderr.write("Usage: ./1-print_square.js <size>\n");
  process.stderr.write("Example: ./1-print_square.js 8\n");
  process.exit(1);
}

square_size = parseInt(process.argv[2], 10);

for (let i = 0; i < square_size; i++) {
  for (let j = 0; j < square_size; j++) {
    process.stdout.write("#");
  }
  process.stdout.write("\n");
}
