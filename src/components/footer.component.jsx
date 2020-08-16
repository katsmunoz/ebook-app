import React from 'react';
import './footer.style.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '@material-ui/core';

const Footer = () => (
    <footer className="footer">
        <Typography style={{ paddingTop: '10px', fontWeight: 400 }} >&copy; { new Date().getFullYear() } - Made with<FavoriteIcon style={{ color: 'red', height: '16px' }} />
        by <a href='https://katsmunoz.github.io/' target="_blank" rel="noopener noreferrer">Katsmunoz</a>
            </Typography>
    </footer>
);

Footer.displayName = "Footer";

export default Footer;