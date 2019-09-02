import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { GameScreen } from './GameScreen';
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

describe('GameScreen.js', () => {
    it('renders properly with no cards', () => {
        act(() => {
            render( <Router>
                        <GameScreen cards={[]} matchedCards={[]} selectedCards={[]} 
                            difficulty={1} set={1} select={() => {}} initializeCards={() => {}} score={0} />
                    </Router>, container);
        });
        expect(container.textContent).toBe('Time: 00:00Score: 0.00');
    }); 

    it('renders properly with cards', () => {
        act(() => {
            render( <Router>
                        <GameScreen cards={[{value: 0, x: 0, y: 0}]} matchedCards={[]} selectedCards={[]} 
                            difficulty={1} set={1} select={() => {}} initializeCards={() => {}} 
                                cardIcons={[faAmbulance]} time={0} score={0} />
                    </Router>, container);
        });

        const cardSvg = container.querySelector('svg');
        expect(cardSvg.classList).toContain('fa-ambulance');
    });
}); 