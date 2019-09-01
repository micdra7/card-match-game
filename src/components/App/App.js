import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameScreen from '../GameScreen/GameScreen';
import Menu from '../Menu/Menu';
import DifficultySelectScreen from '../DifficultySelectScreen/DifficultySelectScreen';
import Scoreboard from '../Scoreboard/Scoreboard';
import ScoreboardInput from '../ScoreboardInput/ScoreboardInput';
import About from '../About/About'; 
import { getScoreboard } from '../../utils/Helper';
import { cardIcons } from '../../utils/Helper';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAmbulance, faAnchor, faBabyCarriage, faBath, faBed, faBeer, faBell, faBicycle,
        faBinoculars, faBomb, faBook, faBug, faBus, faCamera, faCandyCane, faCar,
        faCloud, faDrum, faFeather, faGuitar, faHeadphones, faHeart, faHelicopter, faKey,
        faLightbulb, faLock, faMoon, faRocket, faTv, faUmbrella, faStar, faWrench} from '@fortawesome/free-solid-svg-icons';
import './App.scss';

const App = () => {

    library.add(faAmbulance, faAnchor, faBabyCarriage, faBath, faBed, faBeer, faBell, faBicycle,
                faBinoculars, faBomb, faBook, faBug, faBus, faCamera, faCandyCane, faCar,
                faCloud, faDrum, faFeather, faGuitar, faHeadphones, faHeart, faHelicopter, faKey,
                faLightbulb, faLock, faMoon, faRocket, faTv, faUmbrella, faStar, faWrench);

    const links = [{href: '/game/difficulty/choose', name: 'Start game'}, {href: '/scoreboard', name: 'Scoreboard'}, {href: '/about', name: 'About'}];
    const difficultyList = [{value: 1, name: 'Easy'}, {value: 2, name: 'Normal'}, {value: 3, name: 'Hard'}, {value: 4, name: 'Very hard'}];

    return (
        <div className="app-wrapper">
            <Router>
                <Route exact path="/" render={() => <Menu links={links} />} />
                <Route exact path="/game/:difficulty" render={({ match }) => <GameScreen difficulty={match.params.difficulty} cardIcons={cardIcons} />} />
                <Route exact path="/game/difficulty/choose" render={() => <DifficultySelectScreen difficultyList={difficultyList} />} />
                <Route exact path="/scoreboard" render={() => <Scoreboard propScoreboard={getScoreboard()} />} />
                <Route path="/scoreboard/input" render={() => <ScoreboardInput />} />
                <Route path="/about" render={() => <About />} />
            </Router>
        </div>
    );
    //TODO attribution and such (in About component);
};

export default App;
