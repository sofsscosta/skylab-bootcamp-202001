describe('murray.prototype.find',function(){
    
    it('should return the first value that pass the condition',function(){
        var murray = new Murray(1,2,30,4,50);
        //debugger
        function bigger(value){
            return value > 10;
        }
        var result = murray.find(bigger);
    
        expect(result).toBe(30);
    });

    it('should return undefined when no value pass the condition',function(){
        var murray = new Murray(1,2,30,4,50);
        function bigger(value){
            return value > 100;
        }
        var result = murray.find(bigger);
    
        expect(result).toBe(undefined);
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