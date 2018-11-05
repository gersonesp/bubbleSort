function swap(item1, item2) {
    //if item1 is greater than item2 return item1
    if (item1 > item2) {
        return item1
    }
    //else return item2
    return item2;
}

function bubbleSort(array) {
    /* your code here */
    //if array length is 1 or less just return array
    if (array.length <= 1) return array;
     //    array[i], array[i + 1]
     let index = 0;

     //base case - check if this is the last pair
     if (index === array.length-2) {
        //do something
        }

     //check first item with second item
     let item1 = array[index];
     let item2 = array[index + 1];
     let greaterNumber = swap(item1, item2);
     //if item1 is bigger swap item1 and item2 position (run swap Function)
     if (item1 === greaterNumber) {
         item1 = array[index + 1];
         item2 = array[index];
     }
     //is item2 the last item in array?
        //yes: then redo process on the same array up until the last item
        //no: increase index on both items by one and repeat
        if (item2 === array.length-1) {
            bubbleSort(array.slice(0, array.length-1));
        }

        index++
}
