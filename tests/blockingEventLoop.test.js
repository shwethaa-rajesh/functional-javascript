const {repeat} = require('../blockingEventLoop')

describe('repeat function', function() {
    const printHello=()=>{
        
    }
   
    it('should run without blocking the event loop', function() {
        
        const  runResult = repeat(printHello,123678)
                
                expect(runResult).tobe()
    })
   
   
    it('should throw error if function is not passed as first parameter', function() {
       
        expect(() => repeat(5,23456987654)).toThrow('Function not passed as first argument');
})


})
