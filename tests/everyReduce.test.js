const obj = require('../everyReduce')
describe('countWords function', function() {
    it('Should return array of count of words when input is an array of strings', function() {
        
        const  countArray = obj.countWords(['Apple','Orange','Banana','Orange','Orange','Banana'])
                
                expect(countArray).toStrictEqual({'Apple' :1,'Orange':3,'Banana':2})
    })
   
    it('Should throw invalid function when argument is not an array', function() {
       
        expect(() => obj.countWords('Hi')).toThrow('Not an array');
})

})
