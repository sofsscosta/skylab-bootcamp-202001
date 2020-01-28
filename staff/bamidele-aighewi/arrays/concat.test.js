describe('concat', function () {
    it('should initialize method', function () {
        assert(typeof concat === 'function', 'Function method expected got ' + (typeof concat) + ' instead')
    });

    it('should return [-1, 0, [1, 2, 3, 4]], stringParam, {test: "an object value"}', function () {
        var result = concat([-1, 0, [1, 2, 3, 4]], 'stringParam', { test: 'an object value' });
        var expectedValue = [[-1, 0, [1, 2, 3, 4]], 'stringParam', { test: 'an object value' }]
        
        assert(result.length === 5, 'should length of result be 5. Got ' + result.length + ' instead');
        assert(result.toString() === expectedValue.toString(), 'should value be ' + expectedValue.toString() + '. Got ' + result.toString() + ' instead');
    });
})