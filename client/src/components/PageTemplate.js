import React from 'react';
import { TopNav } from './top-nav';

const PageTemplate = ({ children }) => {
    return (
        <>
            {/* Render the top navigation bar for every page, then render the children */}
            {/* given to the template */}
            <TopNav />
            {children}  
        </>
    )
}

export default PageTemplate;
