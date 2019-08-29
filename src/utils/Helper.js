export const cardIcons = ['ambulance', 'anchor', 'baby-carriage', 'bath', 'bed', 'beer', 'bell', 'bicycle',
                            'binoculars', 'bomb', 'book', 'bug', 'bus', 'camera', 'candy-cane', 'car',
                            'cloud', 'drum', 'feather', 'guitar', 'headphones', 'heart', 'helicopter', 'key',
                            'lightbulb', 'lock', 'moon', 'rocket', 'tv', 'umbrella', 'star', 'wrench'];

export const scoreArrayKey = 'scoreArray';

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getValue = (values) => {
    let rand = getRandomInt(0, values.length - 1);
    return values[rand];
};

export const saveToScoreboardAndReturnScore = (score, name) => {
    const scoreArray = JSON.parse(localStorage.getItem(scoreArrayKey)) || [];

    if (!scoreArray.includes({score, name})) {
        scoreArray.push({score, name});
        localStorage.setItem(scoreArrayKey, JSON.stringify(scoreArray));
    }

    return score;
};

export const getScoreboard = () => {
    return JSON.parse(localStorage.getItem(scoreArrayKey)) || [];
};