import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ScoreboardEntry from './ScoreboardEntry';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('ScoreboardEntry.js', () => {
    it('renders properly', () => {
        act(() => {
            render(<ScoreboardEntry name={'Test'} score={123} />, container);
        });

        const element = container.getElementsByTagName('div')[0];
        expect(element.textContent).toBe('Test: 123.00');
    });
}); 
 