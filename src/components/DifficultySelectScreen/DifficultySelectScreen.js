import React, { useEffect } from 'react';
import { resetState } from '../../reducers/cardReducer';
import { connect } from 'react-redux';
import MenuLink from '../MenuLink/MenuLink';
import './DifficultySelectScreen.scss';

export const DifficultySelectScreen = ({ difficultyList, resetState }) => {

    useEffect(() => {
        resetState();
    }, [resetState]);

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

export default connect(null, {resetState})(DifficultySelectScreen);