let resultString=''
const repeat=(operation,num)=>{
  if(typeof operation !== 'function')
      throw new Error('Not a function')
  if (num <= 0) return resultString
  operation()
 // console.log(resultString,num)
  return repeat(operation, --num)

}

const printHello=()=>{
  resultString+='hello';
}
  // Do not remove the line below
  module.exports = {repeat,printHello,resultString}