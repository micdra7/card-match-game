export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getValue = (values) => {
    let val;

    while ((val = values[getRandomInt(0, values.length)]).count === 2);

    return val.val;
};