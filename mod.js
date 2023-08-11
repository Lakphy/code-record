import readline from "readline";

async function read_line() {
  if (!readline) readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    rl.question("", (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

async function resolver() {
  const line1 = await read_line();
  console.log(line1);
}

resolver();
