function find_max(maxArray) {
    
    let tmp = 0;
    let max = 0;
    
    for(var i = 0; i < maxArray.length; i++) {
        let tmp = maxArray[i];
        
        if(max > tmp) {
            max = tmp;
        }
    }

    return max;
}

exports.find_max = find_max;