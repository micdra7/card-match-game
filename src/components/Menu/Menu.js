import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetState } from '../../reducers/cardReducer';
import MenuLink from '../MenuLink/MenuLink';
import './Menu.scss';

export const Menu = ({ links, resetState }) => {

    useEffect(() => {
        resetState();
    }, [resetState]);

    const renderedLinks = links.map(link => 
        (<MenuLink key={link.href.length * link.name.length} href={link.href} className="primary" text={link.name} />));

    return (
        <div className="menu-wrapper">
            {renderedLinks}
        </div>
    );
};

export default connect(null, {resetState})(Menu);