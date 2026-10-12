import myhttp from "http";
import fs from "fs";
import path from "path";

import { configDotenv } from "dotenv";
configDotenv();

const port = process.env.PORT || 8700;

const myserver = myhttp.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./public/index.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/contact") {
    fs.readFile("./public/contact.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/about") {
    fs.readFile("./public/about.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/sign-up") {
    fs.readFile("./public/sign-up.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/login") {
    fs.readFile("./public/login.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description") {
    fs.readFile("./public/description.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description1") {
    fs.readFile("./public/description1.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description2") {
    fs.readFile("./public/description2.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description3") {
    fs.readFile("./public/description3.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description4") {
    fs.readFile("./public/description4.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description5") {
    fs.readFile("./public/description5.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description6") {
    fs.readFile("./public/description6.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description7") {
    fs.readFile("./public/description7.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description8") {
    fs.readFile("./public/description8.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description9") {
    fs.readFile("./public/description9.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description10") {
    fs.readFile("./public/description10.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description11") {
    fs.readFile("./public/description11.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description12") {
    fs.readFile("./public/description12.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description13") {
    fs.readFile("./public/description13.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description14") {
    fs.readFile("./public/description14.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description15") {
    fs.readFile("./public/description15.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/description15") {
    fs.readFile("./public/description15.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/cart") {
    fs.readFile("./public/cart.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/whishlist") {
    fs.readFile("./public/whishlist.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url == "/account") {
    fs.readFile("./public/account.html", (x, y) => {
      res.write(y);
      res.end();
    });
  } else if (req.url.match("\.css$")) {
    const csspath = path.join("public", req.url);
    const readpath = fs.createReadStream(csspath, "UTF-8");
    res.writeHead(258, { "Content-Type": "text/css" });
    readpath.pipe(res);
  } else if (req.url.match("\.js$")) {
    const jspath = path.join("public", req.url);
    const readpath = fs.createReadStream(jspath, "UTF-8");
    res.writeHead(258, { "Content-Type": "text/javascript" });
    readpath.pipe(res);
  } else if (req.url.match("\.jpg$" || req.url.match("\.png$"))) {
    const imgpath = path.join("public", req.url);
    const readpath = fs.createReadStream(imgpath);
    res.writeHead(258, { "Content-Type": "text/image" });
    readpath.pipe(res);
  } else if (req.url.match("\.webp$")) {
    const imgpath1 = path.join("public", req.url);
    const readpath1 = fs.createReadStream(imgpath1);
    res.writeHead(258, { "Content-Type": "text/image" });
    readpath1.pipe(res);
  } else if (req.url.match("\.svg$")) {
    const imgpath2 = path.join("public", req.url);
    const readpath2 = fs.createReadStream(imgpath2);
    res.writeHead(258, { "Content-Type": "text/image" });
    readpath2.pipe(res);
  } else {
    fs.readFile("./public/error.html", (x, y) => {
      res.write(y);
      res.end();
    });
  }
});

myserver.listen(port, () => {
  console.log(`server is runing at port: ${port}`);
});
