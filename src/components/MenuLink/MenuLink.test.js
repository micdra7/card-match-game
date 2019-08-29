import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import MenuLink from './MenuLink';

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

describe('MenuLink.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <Router>
                        <MenuLink href={'/'} text={'Home'} className={'link'} />
                    </Router>, container);
        });

        const element = container.getElementsByTagName('div')[0];
        expect(element.classList).toContain('link');
        expect(element.textContent).toBe('Home');

        const link = container.getElementsByTagName('a')[0];
        expect(link.href).toBe('http://localhost/');
    });
});
 