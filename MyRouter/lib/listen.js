(function () {
  if (typeof window === undefined) {
    return;
  }
  var _wr = function (type) {
    var origin = window.history[type];
    return function () {
      var rv = origin.apply(this, arguments);
      var e = new Event(type);
      window.dispatchEvent(e);
      return rv;
    };
  };
  window.history.pushState = _wr("pushState");
  window.history.replaceState = _wr("replaceState");
})();
