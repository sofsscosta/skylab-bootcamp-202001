describe('Murray.prototype.concat', function () {
	it('should original murrays not be modified', function () {
		var originalMurray = new Murray(1, 2, 3);
		var originalMurray2 = new Murray(4, 5, 6);

		originalMurray.concat(originalMurray2);

		expect(originalMurray.length && originalMurray2.length).toBe(3);

		expect(originalMurray[0]).toBe(1);
		expect(originalMurray[1]).toBe(2);
		expect(originalMurray[2]).toBe(3);
		expect(originalMurray2[0]).toBe(4);
		expect(originalMurray2[1]).toBe(5);
		expect(originalMurray2[2]).toBe(6);
	});


	it('should a new Murray instance be returned', function () {
		var result = new Murray(1, 2).concat(2);

		expect(result).toBeInstanceOf(Murray)
	});

	it('should values in the new Murray be added in order', function () {
		var originalMurray = new Murray(1, 2, 3);
		var originalMurray2 = new Murray(4, 5, 'last');
		var concatenated = originalMurray.concat(originalMurray2)

		expect(concatenated.length).toBe(6)

		expect(concatenated[0]).toBe(1)
		expect(concatenated[1]).toBe(2)
		expect(concatenated[2]).toBe(3)
		expect(concatenated[3]).toBe(4)
		expect(concatenated[4]).toBe(5)
		expect(concatenated[5]).toBe('last')
	});

	it('should add non-murray and non-array objects as a whole', function () {
		var murray = new Murray(1, 2, 3);
		var obj = { 0: 6, 1: 7 };

		var concatenated = murray.concat([4, 5], obj);

		expect(concatenated[3]).toBe(4)
		expect(concatenated[4]).toBe(5)
		expect(concatenated[5]).toBe(obj)

	});


	it('should return a copy of murray if no values are provided', function () {

		var murray = new Murray(1, 2);

		var concatenated = murray.concat()

		expect(concatenated.length && murray.length).toBe(2)

		expect(concatenated[0]).toBe(murray[0]);
		expect(concatenated[1]).toBe(murray[1]);
	});
});









