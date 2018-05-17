global.measuredExecutionTime = function (fn, args) {
  var result;
  var targetFn;
  return function () {
    console.time(result);
    fn = targetFn.call(args);
    console.timeEnd(result);
    return result;
  };
};