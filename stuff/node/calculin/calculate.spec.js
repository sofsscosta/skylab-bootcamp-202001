const calculate = require('./calculate')

describe('calculate', () => {
    it('should succeed on valid expression', () => {
        const result = calculate('2*2-3/4')

        expect(result).toBe(3.25)
    })
}) 
