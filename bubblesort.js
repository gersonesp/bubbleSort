function swap(item1, item2) {
    //if item
}

function bubbleSort(array) {
    /* your code here */
    let sortedArr = [];
    if (array.length <= 1) return array;

    for (let i = 0; i < array.length; i++) {
        sortedArr.push(swap(array[i], array[i + 1]));
    }


    return sortedArr;
}
