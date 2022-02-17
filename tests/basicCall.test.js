const {duckCount} = require('../basicCall')

describe('duckCount function', ()=> {

   
    it('should return the count of objects with property quack', function() {
        
        const  count = duckCount([{'id':1,'quack':4},{'quack':3},{'quack':6,'name':'shwethaa'},{'id':4}])
                
                expect(count).toStrictEqual(3)
    })
    it('should return 0 if no object has the property quack', function() {
        
        const  count = duckCount([{'id':3},{'name':'shwethaa'}])
                
                expect(count).toStrictEqual(0)
    })
    it('should throw error if array is not the parameter', function() {
       
        expect(() => duckCount(1)).toThrow('Array is not found');
})
    it('should throw error if array does not have objects passed as  parameter', function() {
       
        expect(() => duckCount([[1,2],[2,4],[5,6]])).toThrow('Array does not contain objects');
})

})
