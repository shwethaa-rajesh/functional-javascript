const obj = require('../basicRecursion')

describe('reduce function', function() {
    const add=(previous,current,index,numbers)=>
    {
        previous=previous+current
        return previous
    }
   
    it('should return the sum of all the numbers in an array when initial value is 0', function() {
        
        const  sum = obj.reduce([1,2,3,4,5],add,0)
                
                expect(sum).toStrictEqual(15)
    })
    it('should return the sum of all the numbers in an array when initial value is given', function() {
        
        const  sum = obj.reduce([1,2,3,4,5],add,5)
                
                expect(sum).toStrictEqual(20)
    })
   
    it('should throw error if array is not passed as first parameter', function() {
       
        expect(() => obj.reduce(5,add,0)).toThrow('Array not passed as first argument');
})
it('should throw error if function is not passed as second parameter', function() {
       
    expect(() => obj.reduce([1,3,5],3,0)).toThrow('Function not passed as second argument');
})

})
