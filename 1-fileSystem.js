const fs = require("fs");

// fs.mkdir("./assets", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("process completed successfully");
//   }
// });
// fs.mkdir("./assets/fonts", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("process completed successfully");
//   }
// });

// -----------------------------------------------------
// write file

// fs.writeFile("msg.txt", "bye world", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("process completed successfully");
//   }
// });

// const data = `
// <html>
//   <head>
//     <title>welcome to nodejs class</title>
//   </head>

//   <body>
//     <h1>hello world</h1>
//   </body>
// </html>
// `;

// fs.writeFile("index.html", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("process completed successfully");
//   }
// });

// const data = `
// (() => {
//   console.log("hello world");
// })()
// `;

// fs.writeFile("test.js", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("process completed successfully");
//   }
// });

// ---------------------------------------
// read file

fs.readFile("./1-fileSystem.js", "utf8", (err, data) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("data", data);
    console.log("process completed");
  }
});
