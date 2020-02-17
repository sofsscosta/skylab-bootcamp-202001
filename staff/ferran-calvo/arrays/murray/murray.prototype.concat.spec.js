describe('Murray.prototype.concat', function () {
    it("it should return a murray = (1,2,3,4,5,6,7,8)",function(){
        var a = new Murray(1,2,3);
        var b = new Murray(4);
        var c = new Murray(5,6,7,8);
        var result = a.concat(b,c);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
        expect(result[4]).toBe(5);
        expect(result[5]).toBe(6);
        expect(result[6]).toBe(7);
        expect(result[7]).toBe(8);
    })
    it('it should be true, all the elements pass the condition',function(){
        var a = new Murray("a", "b");
        var b = new Murray("c", 1, 2, 3);
        var result = a.concat(b)
        expect(result[0]).toBe("a");
        expect(result[1]).toBe("b");
        expect(result[2]).toBe("c");
        expect(result[3]).toBe(1);
        expect(result[4]).toBe(2);
        expect(result[5]).toBe(3);
    })
});