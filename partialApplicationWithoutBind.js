const logger=(namespace)=> {
    if(namespace.constructor !== String) return () => {console.log("Invalid namespace, enter a string please!");};
    return (...args) => {
        const   arr = [];
                arr.push(namespace,...args);
                console.log.apply(console, arr);
    }
}

module.exports = logger