import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardCollection from '../CardCollection/CardCollection';
import Menu from '../Menu/Menu';
import Scoreboard from '../Scoreboard/Scoreboard';
import About from '../About/About'; 
import { initializeCards } from '../../reducers/cardReducer';
import './App.scss';
import { connect } from 'react-redux';

const App = (props) => {

    useEffect(() => {
        props.initializeCards(1);
    }, [props]);

    return (
        <Router>
            <Route exact path="/" render={() => <Menu />} />
            <Route path="/game" render={() => <CardCollection />} />
            <Route path="/scoreboard" render={() => <Scoreboard />} />
            <Route path="/about" render={() => <About />} />
        </Router>
    );
    //TODO attribution and such (in About component);
};

export default connect(null, {initializeCards})(App);
