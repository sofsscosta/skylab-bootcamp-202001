describe("every",function()
{
    it("should return true if all elements are equal o lower than 7",function()
    {
        var arr = [1,3,4,5,6,7,7];
        var expresion = function(val){ return val <= 7};
        var result = every(arr,expresion);

        assert(result === true , "result should be true, but got " + result);
    })

    it("should return false if 1 element is bigger than 7", function()
    {
        var arr = [1,3,4,5,6,7,8];
        var expresion = function(val){ return val <= 7};
        var result = every(arr,expresion);

        assert(result === false, "result should be false, but got " + result)
    })

    it ("should iterated over all elements of array",function()
    {
        var arr = [1,3,"string"];
        var expresion = function(val) {
            
        }
    })
})

