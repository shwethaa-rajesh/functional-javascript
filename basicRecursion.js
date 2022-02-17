const reduce=(arr, fn, initial)=> {

    if(!Array.isArray(arr))
    {
        throw new Error('Array not passed as first argument');
    }
    if(typeof fn !== 'function')
    {
        throw new Error('Function not passed as second argument');
    }
	return (recur=(index, value) =>{
		
		if(index > arr.length - 1) return value;

		return recur(index + 1, fn(value, arr[index], index, arr));

	})(0, initial);
};
/*
const add=(previous,current,index,numbers)=>
{
    previous=previous+current
    return previous
}*/
  module.exports = {reduce}