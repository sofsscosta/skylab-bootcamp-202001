describe("Murray.prototype.constructor", function() {

    it("should instantiate a Murray when single value in arguments is an Object", function() {
        var murray = new Murray({"a": 1});

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(1)
        expect("[object Object]").toBe("[object Object]")
    })

    it("should instantiate a Murray when single value in arguments is a Function", function() {
        var func = function() { console.log('hello world')}
        var murray = new Murray(func);

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(1)
        expect(murray[0].name).toBe("func")
    })

    it("should instantiate a Murray when single value in arguments is an Array", function() {
        var murray = new Murray([])

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(1)
        expect(murray[0].constructor.name).toBe("Array")
    })
    
    it("should by default instantiate a Murray instance with length 0", function() {
        var murray = new Murray;

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(0)
    })

    it("should instantiate a Murray when multiple integer values in arguments", function() {

        var murray = new Murray(4, 7)

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(2)
        expect(murray[0]).toBe(4)
        expect(murray[1]).toBe(7)
    })

    it("should intantiate a Murray with length equal to single integer value in arguments", function() {
        var murray = new Murray(27)

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(27)

        for (var i = 0; i < murray.length; i++) {
            expect(murray[i]).toBeUndefined()
        }
    })

    it("should instantiate a Murray with length 1 when single non-integer value in arguments", function() {
        var murray = new Murray("one")

        expect(murray).toBeInstanceOf(Murray)
        expect(murray.length).toBe(1)
        expect(murray[0]).toBe("one")
    })
    
    it("should fail when single value in arguments is numeric but not integer", function() {
        expect(function() { new Murray(1.7) }).toThrowError(RangeError, 'Invalid murray length')
    })

    


})