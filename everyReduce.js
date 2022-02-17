const countWords=(arr)=> {
    if(!Array.isArray(arr))
        throw new Error('Not an array');
    return arr.reduce((countMap, word) =>{
      countMap[word] = ++countMap[word] || 1 
      return countMap
    }, {}) 
  }
  
  module.exports = {countWords}