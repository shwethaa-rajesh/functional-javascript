function arrayMap(numbers, fn) {
    if(!Array.isArray(numbers))
  {
    throw new Error('Array not passed as first argument');
  }
    return numbers.reduce(function(modifiedArray, item, index, numbers) {
      modifiedArray.push(fn( item, index, numbers));
      return modifiedArray
    }, [])
  }
  
    //console.log(arrayMap([1,2,3],multiplyByTwo))

    module.exports = {arrayMap};