const obj = require('../basicFilter')
describe('getShortMessages function', function() {
    it('Should return array of messages when object is input', function() {
        const messages=[{id:1,message:'Hi'},{id:2,message:'Hello'}]
        const   messageArray = obj.getShortMessages(messages)
                
                expect(messageArray).toStrictEqual(['Hi','Hello'])
    })
   it('Should throw invalid function when argument is not an array', function() {
       
                expect(() => obj.getShortMessages(6)).toThrow('Not an array');
    })
    
})
