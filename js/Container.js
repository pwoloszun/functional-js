function Container(value) {
  if (this.constructor !== Container)
    return new Container(value);

  this.value = value;
}

Container.prototype.map = function(fn) {
  var mappedValue = fn(this.value);
  return Container(mappedValue);
};
