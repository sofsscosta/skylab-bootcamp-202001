Function.prototype.extend = (father) {
  this.prototype = Object.create(father.prototype);
  this.prototype.constructor = this;
}