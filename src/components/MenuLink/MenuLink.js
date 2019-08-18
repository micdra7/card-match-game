import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLink.scss';

const MenuLink = ({ href, text, className }) => {

    return (
        <div className={`menu-link ${className}`}>
            <Link to={href}>
                {text}
            </Link>
        </div>
    );
};

export default MenuLink;