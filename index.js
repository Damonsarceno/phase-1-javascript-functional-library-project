function myEach(collection, iteratee) {
    const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

    for (let idx = 0; idx < newCollection.length; idx++) 
      iteratee(newCollection[idx])
    
    return collection
}  

function myMap(collection, iteratee) {
    if (!(collection instanceof Array))
       collection = Object.values(collection)
    
    const newArray = []
    
    for (let idx = 0; idx < collection.length; idx++)
      newArray.push(iteratee(collection[idx]))

    return newArray
}

function myReduce(collection, callback , accumulator) {
  let newCollection = Object.values(collection);
  
    
    if (!accumulator) {
      
          accumulator = newCollection[0]
          newCollection = newCollection.slice(1)
         
     }

     let newLength = newCollection.length;

     for (let idx = 0; idx < newLength; idx++) {
      
             accumulator = callback(accumulator, newCollection[idx], newCollection)
             
     }
     return accumulator;
}

function myFind(collection, predicate) {
    if (!(collection instanceof Array));
   
    for (let idx = 0; idx < collection.length; idx++) {
     if (predicate(collection[idx])) return collection[idx];
    }
     return undefined;

}

function myFilter(collection, predicate) {
  if (!(collection instanceof Array));

  const newArray = [];

    for (let idx = 0; idx < collection.length; idx++)
      if (predicate(collection[idx])) newArray.push(collection[idx]);

return newArray
}

function mySize(collection) {
  let newCollection = Object.values(collection);
  return (newCollection.length)
}

function myFirst(collection, stop=false) {
  return (stop) ? collection.slice(0, stop) : collection[0]
}

function myLast(collection, start=false) {
  return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
}

function myKeys(object) {
 const keys = [];
 for (let key in object) {
  keys.push(key)
 }
 return keys;
}

function myValues(object){
  const values = [];
  for (let key in object) {
    values.push(object[key])
  }
  return values;
}