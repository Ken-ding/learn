const Koa = require("koa");
const app = new Koa();
const fs = require("fs");
const httpProxy = require("http-proxy");

httpProxy.createProxyServer({ target: "http://localhost:3000" }).listen(8000);

app.use(async (ctx) => {
  if (ctx.url === "/") {
    try {
      var data = fs.readFileSync("./static/index.html", "utf8");
      ctx.set("Allow", "GET,POST");
      ctx.body = data;
    } catch (error) {
      console.log(error);
    }
  }
  if (ctx.url === "/test") {
    ctx.cookies.set("cid", "hello world", {
      domain: ".test.com", // 写cookie所在的域名
      path: "/", // 写cookie所在的路径
      maxAge: 2 * 60 * 60 * 1000, // cookie有效时长
      expires: new Date("2018-02-08"), // cookie失效时间
      httpOnly: true, // 是否只用于http请求中获取
      overwrite: false, // 是否允许重写
    });
    ctx.body = "Hello,World";
  }
  if (ctx.url === "/getCookies") {
    let value=ctx.cookies.get("cid");
    console.log(value);
    ctx.cookies.set("_id", "h1", {
      domain: ".test.com", // 写cookie所在的域名
      path: "/getCookies", // 写cookie所在的路径
      maxAge: 2 * 60 * 60 * 1000, // cookie有效时长
      expires: new Date("2018-02-08"), // cookie失效时间
      httpOnly: true, // 是否只用于http请求中获取
      overwrite: false, // 是否允许重写
    });
    ctx.body = "Cookies 获取成功";
  }
});

app.listen(3000);
