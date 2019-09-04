import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BackButton  } from './BackButton';

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

describe('BackButton.js', () => {
    it('doesn\'t render on main page', () => {
        const history = {
            goBack: () => {}
        };
        const location = {
            pathname: '/'
        };

        act(() => {
            render(<BackButton location={location} history={history} />, container);
        });

        expect(container.textContent).toBe('');
    });

    it('renders on other pages', () => {
        const history = {
            goBack: () => {}
        };
        const location = {
            pathname: '/game/1'
        };

        act(() => {
            render(<BackButton location={location} history={history} />, container);
        });

        expect(container.getElementsByTagName('svg').length).toBe(1);
    });
}); 