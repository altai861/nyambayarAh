const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Height:', (height) => {

  for (let i = 1; i <= height; i++) {
    let empty_space = height - i; // 4
    let empty = " "
    let emptystring = multiplyString(empty, empty_space) // success

    console.log(emptystring + multiplyString("#", i))
  }

   rl.close();
});


// ("altai", 4) => "altaialtaialtaialtai"
function multiplyString(str, x) {
  return str.repeat(x)
}
