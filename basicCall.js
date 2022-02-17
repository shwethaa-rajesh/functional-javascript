const duckCount=(objectArray)=> {
  if(!Array.isArray(objectArray))
  {
    throw new Error('Array is not found');
  }
  if(objectArray.length===0)
  {
    return 0;
  }
  if(objectArray[0].constructor !== Object)
  {
    throw new Error('Array does not contain objects');
  }
    console.log(Array.prototype.slice.call(objectArray))
    return objectArray.filter((obj)=>{
        return Object.prototype.hasOwnProperty.call(obj,'quack');
    }).length;
  }
  //console.log(typeof arguments)
objects=[{quack:2},{id:1},{quack:3},{quack:4}]
console.log(duckCount(objects))
  module.exports = {duckCount}
