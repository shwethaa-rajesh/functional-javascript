
  const getShortMessages=(messages)=>{
      if(!Array.isArray(messages))
        throw new Error('Not an array');
    return messages.filter((item)=> {
        return item.message.length < 50
      }).map((item)=> {
        return item.message
      })
  }
  module.exports = {getShortMessages}