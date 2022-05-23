function binarySearch(arr, target) {
    
    if(arr.length === 0 ) {
        return -1
    }  

    if(target < arr[0] || target > arr[arr.length-1]) {
        return -1
    }

    const midpoint = Math.floor(arr.length/2)

    if(arr[midpoint] === target) {
        return  midpoint
    }

    if( arr[midpoint] < target) {
        return binarySearch(arr.slice(midpoint, -1), target)
    }
    if( arr[midpoint > target]) {
        return binarySearch(arr.slice(0, midpoint+1), target)
    }
}



console.log(binarySearch([1,2,3,4,6,12,200], 200))