const doubleAll=(numbers)=> {
    if(Array.isArray(numbers))
    {
        const doubleNumbers=numbers.map((number)=>{return number*2});
        return doubleNumbers;
        
    }
    throw new Error('Not an array');
}
//console.log(doubleAll(4))
  module.exports = {doubleAll}