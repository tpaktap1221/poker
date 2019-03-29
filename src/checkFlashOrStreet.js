function isFlash(arr) {
    var result = {};
    for (var i = 0; i < arr.length; ++i) {
        var a = arr[i];
        if (result[a] !== undefined) {
            ++result[a];
        }
        else {
            result[a] = 1;
        }
    }
    for (var key in result)
        if (result[key] >= 5) {
            return true;
        }
        else return false;
}

function isStreet(arr) {
    var array = [...new Set(arr)];
    array = array.filter(function (element, index, arr) {
        return (element + 1) === arr[index + 1] || (element) === arr[index - 1] + 1
    });
    if (array[0] === array[array.length - 1] - (array.length - 1) && array.length >= 5) {
        return true;
    }
    else {
        return false;
    }
}
export { isFlash, isStreet } 