function Maybe(value) {
  if (this.constructor !== Maybe)
    return new Maybe(value);
  this.value = value;
}

Maybe.prototype.map = function(fn) {
  var mappedValue;
  if (this.value == null)
    mappedValue = null;
  else
    mappedValue = fn(this.value);
  return Maybe(mappedValue);
};
