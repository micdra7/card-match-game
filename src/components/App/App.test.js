import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../../store';
import App from './App';

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

describe('App.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <Provider store={store}>
                        <App />
                    </Provider>, container);
        });

        expect(container.textContent).toBe('Start gameScoreboardAbout');
    });
}); 