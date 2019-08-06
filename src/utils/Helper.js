export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getValue = (values) => {
    console.log(values);
    let rand = getRandomInt(0, values.length - 1);
    console.log(rand);
    
    let val = values[rand];
    while (val.useCount  === values.length) {
        rand = getRandomInt(0, values.length - 1);
        val = values[rand];
        console.log(rand);
    }

    val.useCount++;
    
    return val.val;
};