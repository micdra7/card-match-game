import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardCollection from '../CardCollection/CardCollection';
import Menu from '../Menu/Menu';
import Scoreboard from '../Scoreboard/Scoreboard';
import About from '../About/About'; 
import './App.scss';

const App = () => {

    const links = [{href: '/game', name: 'Start game'}, {href: '/scoreboard', name: 'Scoreboard'}, {href: '/about', name: 'About'}];

    return (
        <div className="app-wrapper">
            <Router>
                <Route exact path="/" render={() => <Menu links={links} />} />
                <Route path="/game" render={() => <CardCollection />} />
                <Route path="/scoreboard" render={() => <Scoreboard />} />
                <Route path="/about" render={() => <About />} />
            </Router>
        </div>
    );
    //TODO attribution and such (in About component);
};

export default App;
