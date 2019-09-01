import React, { useEffect } from 'react';
import { resetState } from '../../reducers/cardReducer';
import MenuLink from '../MenuLink/MenuLink';
import './Menu.scss';

const Menu = ({ links }) => {

    useEffect(() => {
        resetState();
    }, []);

    const renderedLinks = links.map(link => 
        (<MenuLink key={link.href.length * link.name.length} href={link.href} className="primary" text={link.name} />));

    return (
        <div className="menu-wrapper">
            {renderedLinks}
        </div>
    );
};

export default Menu;