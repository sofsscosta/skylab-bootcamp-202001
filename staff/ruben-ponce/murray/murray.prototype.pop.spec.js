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

describe('Murray.prototype.pop', function () {
    it('should have return substracted last index of array [1,2,3]', function () {
        var murray = new Murray(1, 2, 3);
        var rest = murray.pop();

        expect(rest).toBe(3);
        expect(murray[murray.length-1]).toBe(2);

        murray.forEach(function(value, index) {
            expect(value).toBe(index + 1);
        });
    });
});