const Koa = require("koa");
const app = new Koa();
const fs = require("fs");
const path = require("path");
const compress = require('koa-compress');

app.use(compress({
    filter: function(content_type) { // 只有在请求的content-type中有gzip类型，我们才会考虑压缩，因为zlib是压缩成gzip类型的
        return /text/i.test(content_type);
    },
    threshold: 10, // 阀值，当数据超过1kb的时候，可以压缩
    deflate: {
        flush: require('zlib').constants.Z_SYNC_FLUSH
    },
    br: false
}));

app.use(async (ctx) => {
  if (ctx.url === "/") {
    var data = fs.readFileSync("./static/index.html", "utf8");
    ctx.body = data;
  }
  if (ctx.url === "/gizp") {
    try {
        var data="gizp111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
      ctx.body = data;
    } catch (e) {
      console.log(e);
    }
  }
});

app.listen(3000);
