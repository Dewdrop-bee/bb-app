const sayBoom = require('./index.js');
if (sayBoom() === "Boom, and bash!") {
  console.log("Test passed!");
}
else {
  console.log("Test failed!");
process.exit(1);
}