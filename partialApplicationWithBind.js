const logger = (namespace) => {
    if(namespace.constructor !== String) return () => { console.log("Invalid namespace, enter a string please!");};
    return console.log.bind(console,namespace);
};

module.exports= logger