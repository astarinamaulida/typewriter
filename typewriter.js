const sentence = "hello there from lighthouse labs";

let x = 1000;
for (const char of sentence) {
  //have more control and avoid automatically adding an extra "newline character" at the end each time
  setTimeout(() => {
    process.stdout.write(char); // print the char here
  }, x); // 1 second delay
  x += 50;
}
setTimeout(() => {
  process.stdout.write("\n");
}, x);
