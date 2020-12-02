const http = require("http");
const fs = require("fs");
const path = require("path");

// http
//   .createServer(function (req, res) {
//     if (/\/(static)/.test(req.url)) {
//       let content = fs.readFileSync(path.join(__dirname, req.url));
//       let stat = fs.statSync(path.join(__dirname));
//       console.log("access...");

//       res.writeHead(200, {
//         "Last-Modified": "2020-12-01T07:39:09.732Z",
//       });
//       console.log("access...");
//       res.end(content);
//     } else {
//       res.setHeader("Access-Control-Allow-Origin", "*");
//       // res.setHeader('Cache-Control','no-store')
//       // res.setHeader('Cache-Control','no-cache')
//       // res.setHeader('Cache-Control','max-age=10')
//       // res.setHeader('Cache-Control','s-maxage=10')
//       // res.setHeader('Cache-Control','public')
//       // res.setHeader('Cache-Control','private')

//       let str = new Date(Date.now() + 10000).toString();

//       // res.setHeader('Expires',str)
//       //   res.setHeader("Last-Modified", str);
//       res.write("hello,world");
//       console.log("access...");
//       res.end();
//     }
//   })
//   .listen(8889);

http
  .createServer(function (req, res) {
    if (/\/(static)/.test(req.url)) {
      var hashStr = "A hash string.";
      var hash = require("crypto").createHash("sha1").update(hashStr).digest("base64");
      try {
        const etag = req.headers["if-none-match"];
        if (etag === hash) {
          res.writeHead(304);
          res.end();
        } else {
          res.writeHead(200, {
            Etag: hash,
          });

          let content = fs.readFileSync(path.join(__dirname, req.url));
          console.log("access...");

          res.end(content);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.write("hello,world");
      res.end();
    }
  })
  .listen(8889);
