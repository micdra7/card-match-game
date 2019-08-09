import React, { useEffect } from 'react';
import CardCollection from '../CardCollection/CardCollection';
import { initializeCards } from '../../reducers/cardReducer';
import './App.scss';
import { connect } from 'react-redux';

const App = (props) => {

    useEffect(() => {
        props.initializeCards(1);
    }, [props]);

    return (
        <div>
            <CardCollection />
        </div>
    );
};

export default connect(null, {initializeCards})(App);
