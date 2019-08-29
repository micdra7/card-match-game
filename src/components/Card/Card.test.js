import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Card from './Card';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';

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

describe('Card.js', () => {
    it('renders properly and reacts to click event', () => {
        let cardWrapper;
        const className = 'card';

        act(() => {
            render(<Card className={className} value={faAmbulance} 
                handleClick={() => {cardWrapper.classList.add('visible');}} />, container);
        });
        cardWrapper = container.querySelector('.card');
        expect(cardWrapper.classList).toContain(className);

        const cardSvg = container.getElementsByTagName('svg')[0];
        expect(cardSvg.classList).toContain('fa-ambulance');

        act(() => {
            cardWrapper.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        expect(cardWrapper.classList).toContain('visible');
    }); 
}); 