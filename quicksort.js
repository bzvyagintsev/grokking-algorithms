function quicksort(array) {
    if (array instanceof Array) {
        if (array.length < 2) {
            return array;
        }

        var anchor = Math.ceil((array.length - 1) / 2);
        var smaller = [];
        var bigger = [];

        for (var i = 0; i < array.length; i++) {
            if (i !== anchor) {
                if (array[i] <= array[anchor]) {
                    smaller.push(array[i]);
                } else if (array[i] > array[anchor]) {           
                    bigger.push(array[i]);
                }
            }
        }

        return quicksort(smaller).concat(array[anchor], quicksort(bigger));
    }

    return null;
}
