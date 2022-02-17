const obj = require('../higherOrderFunctions')
describe('repeat function', function() {
    it('Should call the operation function n times', function() {
        
        obj.resultString=''
        const   repeatResult = obj.repeat(obj.printHello,2)
                //const spy=jest.spyOn
                expect(repeatResult).toBe('hellohello')
    })
   it('Should throw invalid function when argument is not a function', function() {
       
                expect(() => obj.repeat("test",3)).toThrow('Not a function');
    })
    
})
