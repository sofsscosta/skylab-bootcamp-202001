describe('murray.protetyp.includes.js', function(){
    it('should return a true or false value', function(){
        var murray = new Murray(1,2,3);
        var resultTrue = murray.includes(3);
        var resultFalse = murray.includes(4); 

        expect(resultTrue).toBe(true);
        expect(resultFalse).toBe(false);
    });

    it('should start at indexStart if you put it as a value', function(){
        var murray = new Murray(1,2,3);
        var resultTrue = murray.includes(2,1);
        var resultFalse = murray.includes(2,2);
        expect(resultTrue).toBe(true);
        expect(resultFalse).toBe(false); 
    });
    
    it('should look for undefine if you dont send any value', function(){
        var murray = new Murray(1,2,3,undefined);
        var resultTrue = murray.includes();
        
        expect(resultTrue).toBe(true);
    });
    
    it('should start lookinf for at this.length - start index when start index is negative', function(){
        var murray = new Murray(1,2,3,4,5,6,7);
        var resultTrue = murray.includes(4,-4);
        var resultFalse = murray.includes(4,-3);
        
        expect(resultTrue).toBe(true);
        expect(resultFalse).toBe(false); 
    });

    it('should start index be 0 if its Nan', function(){
        var murray = new Murray(1,2,3,4,5,6,7);
        var result1 = murray.includes(1,undefined);
        var result2 = murray.includes(4,'a');

        expect(result1).toBe(true);
        expect(result2).toBe(true); 
    });
})