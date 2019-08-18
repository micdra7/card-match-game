import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import './DifficultySelectScreen.scss';

const DifficultySelectScreen = ({ difficultyList }) => {

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