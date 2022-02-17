const obj = require('../basicMap')
describe('doubleALL function', function() {
    it('Should double each parameter of array', function() {

        const   doubleNumbers = obj.doubleAll([1,4,3,2,6])
                
                expect(doubleNumbers).toStrictEqual([2, 8, 6, 4, 12])
    })
   it('Should throw invalid function when argument is not an array', function() {
       
                expect(() => obj.doubleAll(6)).toThrow('Not an array');
    })
    
})
