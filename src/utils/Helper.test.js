import { getRandomInt, saveToScoreboardAndReturnScore, getValue, getScoreboard } from './Helper';
describe('Helper methods', () => {
    it('Get value between 1 and 10', () => {
        const value = getRandomInt(1, 10);
    
        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).toBeLessThanOrEqual(10);
    });
    
    it('Get same value as given', () => {
       expect(saveToScoreboardAndReturnScore(1, '')).toBe(1); 
    });

    it('Get value from array', () => {
        expect(getValue([1])).toBe(1);
    });

    it('Get empty scoreboard', () => {
        expect(getScoreboard()).toStrictEqual([{name: '', score: 1}]);
    });
});
