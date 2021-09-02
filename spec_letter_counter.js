function spec_letter_counter(specString) {

    let specObject = {};
    let splitString = specString.split('');
    
    for (let i = 0; i < splitString.length; i++) {
        if(!specObject.hasOwnProperty(splitString[i]))
            specObject[splitString[i]] = 1;
        else
            specObject[splitString[i]] += 1
    }

    return specObject;
    //console.log(specObject);
}

exports.spec_letter_counter = spec_letter_counter