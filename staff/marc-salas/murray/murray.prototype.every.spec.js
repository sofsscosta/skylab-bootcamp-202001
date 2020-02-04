describe('Murray.prototype.every',function(){

    it('should return a true or false', function(){
        var murray = new Murray(1,2,3);
        function test(value){return value < 10;};
        var result = murray.every(test);

        expect(result).toBe(true);
    });

    it('should operate for all the element of the array', function(){
        (function(){
            var murray = new Murray(11,2,3);
            function test(value){return value < 10;};
            var result = murray.every(test);

            expect(result).toBe(false);
        })();
        (function(){
            var murray = new Murray(1,22,3);
            function test(value){return value < 10;};
            var result = murray.every(test);

            expect(result).toBe(false);
        })();
        (function(){
            var murray = new Murray(1,2,33);
            function test(value){return value < 10;};
            var result = murray.every(test);

            expect(result).toBe(false);
        })();

    });

    it('Should throw an error id the expresion is not a function', function(){

        expect(function() {

            new Murray(1,2,3).every();
        }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() {

            new Murray(1,2,3).every(true);
        }).toThrowError(TypeError, 'true is not a function');
        expect(function() {

            new Murray(1,2,3).every(1);
        }).toThrowError(TypeError, '1 is not a function');

    });

})