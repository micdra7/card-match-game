import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import './Menu.scss';

const Menu = () => {

    return (
        <div className="menu-wrapper">
            <MenuLink href="/game" className="primary" text="button" />
        </div>
    );
};

export default Menu;