//bubble sort
function bubbleSort(items) {
    let swapped;
    let startTime = new Date();
    do {
        swapped = false;
        for (let i=0; i < items.length-1; i++) {
            if (items[i] > items[i+1]) {
                var temp = items[i];
                items[i] = items[i+1];
                items[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    let endTime = new Date();
    return endTime - startTime;
}
//insertion sort
function insertionSort (items) {
    let startTime = new Date();
    let len  = items.length, value, i, j;
    for(i = 1; i < len; i++) {
        value = items[i]
        j = i - 1
        while (j >= 0 && items[j] > value) {
            items[j+1] = items[j]
            j--
        }
        items[j+1] = value
    }
    let endTime = new Date();
    return endTime - startTime;
}
//merge sort
function merge(left, right, arr) {
    let a = 0;
    while (left.length && right.length) {
        arr[a++] = (right[0] < left[0]) ? right.shift() : left.shift();
    }
    while (left.length) {
        arr[a++] = left.shift();
    }
    while (right.length) {
        arr[a++] = right.shift();
    }
}
function mergeSort(items) {
    let startTime = new Date();
    let len = items.length;
    if (len === 1) { return; }
    let mid = Math.floor(len / 2),
        left = items.slice(0, mid),
        right = items.slice(mid);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, items);
    let endTime = new Date();
    return endTime - startTime;
}
//heap sort
function swap(data, i, j) {
    let tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
}
function putArrayInHeapOrder(arr) {
    let i;
    i = arr.length / 2 - 1;
    i = Math.floor(i);
    while (i >= 0) {
        shiftElementDownHeap(arr, i, arr.length);
        i -= 1;
    }
}
function shiftElementDownHeap(heap, i, max) {
    let i_big, c1, c2;
    while(i < max) {
        i_big = i;
        c1 = 2*i + 1;
        c2 = c1 + 1;
        if (c1 < max && heap[c1] > heap[i_big])
            i_big = c1;
        if (c2 < max && heap[c2] > heap[i_big])
            i_big = c2;
        if (i_big == i) return;
        swap(heap,i, i_big);
        i = i_big;
    }
}
function heapSort(items) {
    let startTime = new Date();
    putArrayInHeapOrder(items);
    let end = items.length - 1;
    while(end > 0) {
        swap(items, 0, end);
        shiftElementDownHeap(items, 0, end);
        end -= 1
    }
    let endTime = new Date();
    return endTime - startTime;
}
//quick sort
function partition(p, xs) {
    return xs.reduce(function (a, x) {
        return (a[p(x) ? 0 : 1].push(x), a);
    }, [[], []]);
}
function quickSort(items) {
    if (items.length) {
        let h = items[0],
            t = items.slice(1),
            lessMore = partition(function (x) {
                return x <= h;
            }, t),
            less = lessMore[0],
            more = lessMore[1];
        return [].concat.apply(
            [], [quickSort(less), h, quickSort(more)]
        );
    } else return [];
}
//counting sort
function countingSort(items, min, max) {
    let i, z = 0, count = [];
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (i=0; i < items.length; i++) {
        count[items[i]]++;
    }
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            items[z++] = i;
        }
    }
    return items;
}
//radix sort
function radixSort(items) {

}
//bucket sort
function bucketSort(items) {

}

