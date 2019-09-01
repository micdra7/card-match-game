import React, { useEffect } from 'react';
import { resetState } from '../../reducers/cardReducer';
import MenuLink from '../MenuLink/MenuLink';
import './DifficultySelectScreen.scss';

const DifficultySelectScreen = ({ difficultyList }) => {

    useEffect(() => {
        resetState();
    }, []);

    const renderedLinks = difficultyList.map(difficulty => (
        <MenuLink key={difficulty.value * difficulty.name.length} href={`/game/${difficulty.value}`} 
            text={difficulty.name} className="primary" />
    ));


    return (
        <div className="difficulty-select-screen-wrapper">
            {renderedLinks}
        </div>
    );
};

export default DifficultySelectScreen;