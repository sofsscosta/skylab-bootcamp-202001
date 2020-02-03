Murray.prototype.slice = function(first, finish) {
  var start = first || 0
  var end = finish || this.length

  if (first < 0) {
    start = this.length + first 
  }

  if (finish < 0 && first < 0) {
    end = Math.abs(first) - Math.abs(finish)
  }

  if (typeof finish === "number" && finish === 0) {
    end = 0
  }

  if(typeof finish === "number" && !Number.isInteger(finish)) {
    end = Math.floor(finish)
  }

  if(typeof first === "number" && !Number.isInteger(first)) {
    start = Math.floor(first)
  }
 
  var murray = new Murray
  var count = 0

  for (let index = start; index < end; index++) {
    murray.push(this[index])
    count = count + 1
  }

  return murray
}