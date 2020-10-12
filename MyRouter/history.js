const url = require("url");

class History {
  static push(path) {
    if (typeof path === "string") {
      window.history.pushState(null, "", path);
      return;
    }
    if (typeof path === "object") {
      let obj = {
        pathname: path.path || "/",
        query: path.query || {},
      };
      const formatUrl = url.format(obj);
      window.history.pushState(null, "", formatUrl);
    }
  }
}

export default History;
