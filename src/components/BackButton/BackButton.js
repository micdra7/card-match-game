import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.scss';

export const BackButton = ({ history, location }) => {

    return (
        <div className="back-button">
            {
                location.pathname === '/' ?
                <></> : 
                <button type="button" onClick={() => history.goBack()}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{width: '2rem', height: '2rem'}} />
                </button>
            }
            
        </div>
    );
};

export default withRouter(BackButton);