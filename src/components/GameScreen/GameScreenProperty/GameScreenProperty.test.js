import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import GameScreenProperty from './GameScreenProperty';

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

describe('GameScreenProperty.js', () => {
    it('renders properly', () => {
        act(() => {
            render(<GameScreenProperty name={'TestProperty'} value={1} />, container);
        });
        expect(container.textContent).toBe('TestProperty: 1.00');
    });
});