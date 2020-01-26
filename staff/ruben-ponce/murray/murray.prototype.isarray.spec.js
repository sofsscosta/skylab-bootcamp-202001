// describe('Murray.prototype.push', function () {
//     it('should have added 4 at the end of murray [1, 2, 3]', function () {
//         var murray = new Murray(1, 2, 3);
//         var length = murray.push(4);

//         expect(length).toBe(4);
//         expect(murray[murray.length - 1]).toBe(4);

//         murray.forEach(function (value, index) {
//             expect(value).toBe(index + 1);
//         });
//     });
// });

describe('Murray.prototype.isArray', function() {
    it('should have return true of array [1,2,3]', function () {
        debugger
        var murray = new Murray(1, 2, 3);
        var boolean = murray.isArray(murray);
        expect(boolean).toBe(true);
        
    });

});