global.measuredExecutionTime = function(fn) {
  var result;
  var targetFn;
  return function() {
    console.time(targetFn);
    result = fn.apply(this, arguments);
    console.timeEnd(targetFn);
    return result;
  };
};

