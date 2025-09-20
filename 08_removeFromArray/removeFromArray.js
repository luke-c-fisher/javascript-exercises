const removeFromArray = function(array, out) {
    let index = array.indexOf(out)
    if (index > -1){
        array.splice(index, 1); 
    }
    return array;
};

const arr = [1,2,5,6]

console.log(removeFromArray(arr, 2));

// The significance of the conditional, if (index > -1), is to ensure that the indexOf method doesn't remove the last element of the
// array, as it does so when it doesn't recognize the element it's given. 


// Do not edit below this line
module.exports = removeFromArray;
