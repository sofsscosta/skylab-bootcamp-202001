describe('concat', function () {
	it('should individual arrays length not be modified', function () {
		var originalArray = [1, 2, 3];
		var arrayToAdd = [4, 5, 6];

		concat(originalArray, arrayToAdd);

		assert(originalArray.length === 3, 'original array length should be 3');
		assert(arrayToAdd.length === 3, 'original array length should be 3');

	});

	it('should all elements in the array be in the same order as the passed arrays', function () {
		var originalArray = [1, 2, 3];
		var arrayToAdd = [4, 5, 6];
		var concatenated = concat(originalArray, arrayToAdd);

		for (var i = 0; i < originalArray.length; i++) {
			assert(concatenated[i] === originalArray[i],
				'value at index ' + i + ' should be ' + originalArray[i]
			);
		}

		for (var i = 0; i < arrayToAdd.length; i++) {
			assert(concatenated[i + 3] === arrayToAdd[i],
				'value at index ' + i + ' should be ' + arrayToAdd[i]
			);
		}
	});

	it('should fail if first parameter is not an Array', function () {
		(function () {
			var _error;
			try {
				concat(1, 2)
			} catch (error) {
				_error = error;

			} finally {
				assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
				assert(_error.message === '1 is not an Array', 'should fail with message "1 is not an Array", but got ' + _error.message);
			}
		})();

		(function () {
			var _error;

			try {
				concat('string', 2)
			} catch (error) {
				_error = error;

			} finally {
				assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
				assert(_error.message === 'string is not an Array', 'should fail with message "string is not an Array", but got ' + _error.message);
			}
		})();

		(function () {
			var _error;

			try {
				concat(true, 2)
			} catch (error) {
				_error = error;

			} finally {
				assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
				assert(_error.message === 'true is not an Array', 'should fail with message "true is not an Array", but got ' + _error.message);
			}
		})();

		(function () {
			var _error;

			try {
				concat(undefined, 2)
			} catch (error) {
				_error = error;

			} finally {
				assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error.constructor.name);
				assert(_error.message === 'undefined is not an Array', 'should fail with message "undefined is not an Array", but got ' + _error.message);
			}
		})();
	});

});









