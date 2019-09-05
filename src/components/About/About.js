import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './About.scss';

const About = () => {

    const svgSize = {width: '2rem', height: '2rem'};

    return(
        <div className="about-wrapper">
            <header className="about-header">
                <h1>Card matching game</h1>
            </header>
            <section className="about-content">
                <p>Made by Michal Drabik</p>
                <div className="about-socials">
                    <span className="github">
                        <a href="https://github.com/micdra7">
                            <FontAwesomeIcon icon={faGithub} style={svgSize} />
                        </a>
                    </span>
                    <span className="linkedin">
                        <a href="https://www.linkedin.com/in/micha%C5%82-drabik-5497b4191/">
                            <FontAwesomeIcon icon={faLinkedin} style={svgSize} />
                        </a>
                    </span>
                </div>
            </section>
        </div>
    );
};
 
export default About;