exports.min = function min(array) {
    let minNum = 0;
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (minNum > array[i]) {
                minNum = array[i];
            }
        }
        return minNum;
    }
};

exports.max = function max(array) {
    let maxNum = 0;
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (maxNum < array[i]) {
                maxNum = array[i];
            }
        }
        return maxNum;
    }
};

exports.avg = function avg(array) {
    let sum = 0;
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
};