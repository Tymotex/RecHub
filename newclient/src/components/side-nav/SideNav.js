import React from 'react';
import MetisMenu from 'react-metismenu';
import './metis-menu.css';

const content=[
    {
        icon: 'Home',
        label: 'Label of Item',
        to: '#a-link',
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                to: '#another-link',
            },
        ],
    },
];

const SideNav = () => {
    return (
        <MetisMenu content={content} activeLinkFromLocation />
    );
}

export default SideNav;

