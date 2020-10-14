const url = require("url");

class History {
  constructor(type) {
    this.type = type || "BrowserRouter";
  }
  push(path) {
    switch (this.type) {
      case "BrowserRouter":
        if (typeof path === "string") {
          window.history.pushState(null, "", path);
        }
        if (typeof path === "object") {
          let obj = {
            pathname: path.path || "/",
            query: path.query || {},
          };
          const formatUrl = url.format(obj);
          window.history.pushState(null, "", formatUrl);
        }
        break;
      case "HashRouter":
        if (typeof path === "string") {
          window.location.hash = path.indexOf("/") === 0 ? path : "/" + path;
        }
        if (typeof path === "object") {
          let obj = {
            pathname: path.path || "/",
            query: path.query || {},
          };
          const formatUrl = url.format(obj);
          window.location.hash =
            formatUrl.indexOf("/") === 0 ? formatUrl : "/" + formatUrl;
        }
        break;
    }
  }
}

export default History;
