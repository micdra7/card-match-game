import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import DifficultySelectScreen from './DifficultySelectScreen';

let container;
const difficultyList = [{value: 1, name: 'Easy'}, {value: 2, name: 'Normal'}];  

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('DifficultySelectScreen.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <Router>
                        <DifficultySelectScreen difficultyList={difficultyList} />
                    </Router>, container);
        });

        const element = container.getElementsByTagName('div')[0];
        expect(element.textContent).toBe('EasyNormal'); 
    });
});
