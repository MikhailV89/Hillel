array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    indexArray = array.indexOf(item);

    if (indexArray !== -1) {
        array.splice(indexArray, 1);
    }
}

removeElement(array, 2);
console.log(array);