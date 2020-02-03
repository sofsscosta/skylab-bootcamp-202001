describe("index-of", function(){
    it("should return '1' as the index of element 'sofia' is the second one within the array", function(){
        var array = ["ferran", "sofia", "monica", "marc", "ramon"];
        var result = indexOf(array, "sofia");

        assert(result === 1, "should return 1 but I got " + result);
    })

    it("should return '-1' if the element is not in the array", function(){
        var array = ["ferran", "sofia", "monica", "marc", "ramon"];
        var result = indexOf(array, "jordi");

        assert(result === -1, "should return -1 but I got " + result);
    })

    it("should return '-1' if there is no value as a parameter", function(){
        var array = ["ferran", "sofia", "monica", "marc", "ramon"];
        var result = indexOf(array);

        assert(result === -1, "should return -1 but I got " + result);
    })

    it("should return '-1' if start index is bigger than the array length", function(){
        var array = ["ferran", "sofia", "monica", "marc", "ramon"];
        var result = indexOf(array, "ramon", start);
        var start = 7;

        if(start >= array.length){
            return result = -1;
        }

        assert(result === -1, "should return -1 but I got " + result);
    })

    it("should return '-1' if start index is equal than the array length", function(){
        var array = ["ferran", "sofia", "monica", "marc", "ramon"];
        var result = indexOf(array, "ramon", start);
        var start = array.length;

        if(start === array.length){
            return result = -1;
        }

        assert(result === -1, "should return -1 but I got " + result);
    })

    it("should return -1 if there is a string as a parameter instead of an Array", function(){
        var array = ["ferran", "sofia", "monica", "marc", "ramon"];
        var result = indexOf("ferran", "marc");

        assert(result === -1, "should return -1 but I got " + result);
    })
})