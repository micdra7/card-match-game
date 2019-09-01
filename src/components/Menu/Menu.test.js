import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Menu from './Menu';

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

describe('Menu.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <Router>
                        <Menu links={[{href: '/', name: 'Home'}, {href: '/game', name: 'Start game'}]} />
                    </Router>, container);
        });

        expect(container.getElementsByTagName('div')[0].textContent).toBe('HomeStart game');
    }); 
}); 