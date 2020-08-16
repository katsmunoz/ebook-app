import React from 'react';
import {AppBar, Toolbar } from '@material-ui/core';
import Book from '@material-ui/icons/Book';
import './header.style.css'

const Header = () => (
    <AppBar className="header-app" position="sticky" style={{ marginBottom: 5, width: '100%'}} >
        <Toolbar >
            <Book className="logo-img" onClick={() => window.location.reload(false)}/>
            &nbsp;&nbsp;
            <h1>Ebooks for thought</h1>
        </Toolbar>
    </AppBar>
);

Header.displayName = "Header";

export default Header;