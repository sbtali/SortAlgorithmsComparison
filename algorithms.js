//bubble sort
function bubbleSort(Array) {
    let startTime = new Date().getTime();
    for (let i=0; i < Array.length-1; i++) {
        for (let j = 0; j < Array.length-i-1; j++)
            if (Array[j] > Array[j+1]) {
                let temp = Array[j];
                Array[j] = Array[j+1];
                Array[j+1] = temp;
            }
    }
    let endTime = new Date().getTime();
    return endTime - startTime;
}
//insertion sort
function insertionSort (Array) {
    let startTime = new Date().getTime();
    for(let i = 1; i < Array.length; ++i) {
        let key = Array[i];
        let j = i-1;
        while (j>=0 && Array[j] > key){
            Array[j+1] = Array[j];
            j = j-1;
        }
        Array[j+1] = key;
    }
    let endTime = new Date().getTime();
    return endTime - startTime;
}
//merge sort
function merge(Array, p, q, r) {
    let m = q - p + 1;
    let n = r - q;
    let left = []; //size:m+1
    let right = []; //size:n+1
    for (let i = 0; i < m ; i++) {
        left[i] = Array[p+i];
    }
    for (let j = 0; j < n ; j++) {
        right[j] = Array[q+1+j];
    }
    left[m]  = Number.MAX_SAFE_INTEGER;
    right[n] = Number.MAX_SAFE_INTEGER;
    let x = 0;
    let y = 0;
    for (let k = p; k <= r; k++){
        if(left[x] <= right[y]) {
            Array[k] = left[x];
            x++;
        } else {
            Array[k] = right[y];
            y++;
        }
    }
}
function mergeSort(Array, p, r) {
    let startTime = new Date().getTime();
    if (p<r){
        let q = Math.floor((p+r)/2);
        mergeSort(Array, p, q);
        mergeSort(Array, q+1, r);
        merge(Array, p, q, r);
    }
    let endTime = new Date().getTime();
    return endTime - startTime;
}
//heap sort
function leftIdx(i) {
    return 2 * i + 1;
}
function rightIdx(i) {
    return 2 * i + 2;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function maxHeapify(Array, i, heapSize) {
    let L = leftIdx(i);
    let R = rightIdx(i);
    let largest = i;
    if (L <= heapSize && Array[L] > Array[i]) {
        largest = L;
    }
    if (R <= heapSize && Array[R] > Array[largest]) {
        largest = R;
    }
    if (largest !== i) {
        swap(Array, i, largest);
        maxHeapify(Array, largest, heapSize);
    }
}
function buildMaxHeap(Array) {
    let heapSize = Array.length;
    for (let i = heapSize / 2; i >= 0; i--) {
        maxHeapify(Array, i, heapSize);
    }
}
function heapSort(Array) {
    let startTime = new Date().getTime();
    let heapSize = Array.length - 1;
    buildMaxHeap(Array);
    for (let i = Array.length - 1; i > 0; i--) {
        swap(Array, 0, i);
        heapSize--;
        maxHeapify(Array, 0, heapSize);
    }
    let endTime = new Date().getTime();
    return endTime - startTime;
}
//quick sort
function partition(Array, p, r) {
    let pivot = Array[r];
    let i = p;
    for (let j = p; j<=(r-1); j++){
        if (Array[j] <= pivot){
            swap(Array,i,j);
            i++;
        }
    }
    swap(Array,i,r);
    return i;
}
function randomizedPartition(Array, p, r) {
    let k = Math.floor(Math.random() * (p - r + 1)) + r;
    swap(Array, r, k);
    return partition(Array, p, r);
}
function randomizedQuickSort(Array, p, r) {
    let startTime = new Date().getTime();
    if(p < r) {
        let q = randomizedPartition(Array, p, r);
        randomizedQuickSort(Array, p, q-1);
        randomizedQuickSort(Array, q+1, r);
    }
    let endTime = new Date().getTime();
    return endTime - startTime;
}
//counting sort
function countingSort(Array) {
    let startTime = new Date().getTime();

    let endTime = new Date().getTime();
    return endTime - startTime;
}
//radix sort
function radixSort(Array) {
    let startTime = new Date().getTime();

    let endTime = new Date().getTime();
    return endTime - startTime;
}
//bucket sort
function bucketSort(Array) {
    let startTime = new Date().getTime();

    let endTime = new Date().getTime();
    return endTime - startTime;
}

