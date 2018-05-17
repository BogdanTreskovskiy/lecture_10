global.bind = function (fn, context, args) {
  return function() {
    return fn.call(context, args);
  };
};