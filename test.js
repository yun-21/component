const rl = require('node:readline');
const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});
readLine.question('인사하실래요? ',(answer)=>{
  console.log(`${answer}`);
})