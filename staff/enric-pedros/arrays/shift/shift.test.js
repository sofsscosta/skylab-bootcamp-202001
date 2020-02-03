describe('SHIFT', function(){

    it('This method should take off the first position of an array',function(){

        (function(){
            var a = [1,2,3,4,5]
            var results = newShift(a);
            assert(results === 1), 'it should be number 1';
            assert(a.length === 4, 'the original arrays length should be lesser than 1')
            assert(a[0] === 2,'this result should be 2');
            assert(a[1] === 3,'this result should be 3')
            assert(a[2] === 4,'this result should be 4')
            assert(a[3] === 5,'this result should be 5')

        })();
    });

    it('This proof should be show the right error message', function(){

        (function(){
            var  _error;
            try {
                newShift(3)

            } catch (error) {
                _error = error
            }
            assert(_error instanceof TypeError, 'the Error should be TypeError fucking idiot')
            assert(_error.message === '3 is not Array','this message should be diferent' )
        })();    
    })




})