const removeFromArray = function(array, ...itemsToRemove) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      const item = itemsToRemove[i];
      const index = array.indexOf(item);
      if (index !== -1) {
        array.splice(index, 1);
      }
    }
  
    return array;
  };
  
  //console.log(removeFromArray([1,2, 3, 4,5], '2',4));

// Do not edit below this line
module.exports = removeFromArray;
