(function() {
    var Point = new Function('x', 'y', 'this.x = x; this.y = y')
    var p = new Point(1, 2)
    console.log(p) 
    // {x: 1, y: 2} // NOTE here the output does not include the name of the type (Point)
    debugger
})();

(function() {
    function Point(x, y) { this.x = x; this.y = y }
    var p = new Point(1, 2)
    console.log(p) 
    // Point {x: 1, y: 2}
    debugger
})();

(function() {
    var Point = function(x, y) { this.x = x; this.y = y }
    var p = new Point(1, 2)
    console.log(p)
    // Point {x: 1, y: 2}
})()