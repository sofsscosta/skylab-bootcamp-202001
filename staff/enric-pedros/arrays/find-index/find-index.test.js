describe('TEST FIND-INDEX',function(){
    
   it('this method should be return the index of the first value that satisfies the testing function',function(){

       (function(){
        var a = [8,7,6,5,5,4,4];
        function findit(expresion) {
           return expresion < 8;
        };
        var result = findit(a,findit)
        assert(result === 1,'')
           
       })();


   }) 

})