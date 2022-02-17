const {arrayMap} = require('../mapUsingReduce')

describe('Array Map function', function() {
    const multiplyByTwo=(current,index,numbers)=>
    {
        current=current*2
        return current
    }
   
    it('should return the array of modified numbers', function() {
        
        const  modifiedArray = arrayMap([1,2,3,4,5],multiplyByTwo)
                
                expect(modifiedArray).toStrictEqual([2,4,6,8,10])
    })
    it('should return empty array if empty array is input', function() {
        
        const  modifiedArray = arrayMap([],multiplyByTwo)
                
                expect(modifiedArray).toStrictEqual([])
    })
   
    it('should throw error if array is not passed as first parameter', function() {
       
        expect(() => arrayMap(5,multiplyByTwo)).toThrow('Array not passed as first argument');
})


})
