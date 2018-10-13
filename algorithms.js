//bubble sort
function bubbleSort(items) {
    let startTime = new Date().getTime();
    for (let i=0; i < items.length-1; i++) {
        for (let j = 0; j < items.length-i-1; j++)
            if (items[j] > items[j+1]) {
                let temp = items[j];
                items[j] = items[j+1];
                items[j+1] = temp;
            }
    }
    let endTime = new Date().getTime();
    return endTime - startTime;
}
//insertion sort
function insertionSort (items) {
    let startTime = new Date().getTime();
    for(let i = 1; i < items.length; ++i) {
        let key = items[i];
        let j = i-1;
        while (j>=0 && items[j] > key){
            items[j+1] = items[j];
            j = j-1;
        }
        items[j+1] = key;
    }
    let endTime = new Date().getTime();
    return endTime - startTime;
}
//merge sort
function merge(items, p, q, r) {
    let m = q - p + 1;
    let n = r - q;
    let left = []; //size:m+1
    let right = []; //size:n+1
    for (let i = 0; i < m ; i++) {
        left[i] = items[p+i];
    }
    for (let j = 0; j < n ; j++) {
        right[j] = items[q+1+j];
    }
    left[m]  = Number.MAX_SAFE_INTEGER;
    right[n] = Number.MAX_SAFE_INTEGER;
    let x = 0;
    let y = 0;
    for (let k = p; k <= r; k++){
        if(left[x] <= right[y]) {
            items[k] = left[x];
            x++;
        } else {
            items[k] = right[y];
            y++;
        }
    }
}
function mergeSort(items, p, r) {
    let startTime = new Date().getTime();
    if (p<r){
        let q = Math.floor((p+r)/2);
        mergeSort(items, p, q);
        mergeSort(items, q+1, r);
        merge(items, p, q, r);
    }
    let endTime = new Date().getTime();
    return endTime - startTime;
}
//heap sort
function heapSort(items) {
    let startTime = new Date().getTime();

    let endTime = new Date().getTime();
    return endTime - startTime;
}
//quick sort
function quickSort(items) {
    let startTime = new Date().getTime();

    let endTime = new Date().getTime();
    return endTime - startTime;
}
//counting sort
function countingSort(items) {
    let startTime = new Date().getTime();

    let endTime = new Date().getTime();
    return endTime - startTime;
}
//radix sort
function radixSort(items) {
    let startTime = new Date().getTime();

    let endTime = new Date().getTime();
    return endTime - startTime;
}
//bucket sort
function bucketSort(items) {
    let startTime = new Date().getTime();

    let endTime = new Date().getTime();
    return endTime - startTime;
}

