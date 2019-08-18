import { getRandomInt } from './Helper';

test('Get value between 1 and 10', () => {
    const value = getRandomInt(1, 10);

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(10);
});
