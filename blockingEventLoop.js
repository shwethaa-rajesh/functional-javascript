function repeat(operation, num) {
    if(typeof operation !== 'function')
    {
        throw new Error('Function not passed as first argument');
    }
    if (num <= 0) return
  
    operation()
    if (num % 20 === 0) {
      setTimeout(function() {
        repeat(operation, --num)
      })
    } else {
      repeat(operation, --num)
    }
  }
  
  module.exports = {repeat}