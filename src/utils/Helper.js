export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getValue = (values, usedValues = []) => {
    
    let rand = getRandomInt(0, values.length - 1);
    
    let val = values[rand];
    let count;// countInArray(usedValues, val);

    while (count === 2) {
        rand = getRandomInt(0, values.length - 1);
        val = values[rand];
    }

    if (count < 2) {
        usedValues.push(val);
    }
    
    return val.val;
};

// DOESN'T WORK, too performance reducing
// export const countInArray = (array, value) => {
//     return array.reduce((accumulator, element) => {
//         return accumulator + (element === value);
//     }, 0);
// };