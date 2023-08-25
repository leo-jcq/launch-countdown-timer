import { FC } from 'react';
import { iconFacebook, iconInstagram, iconPinterest } from '../../assets/assets';
import './Footer.scss';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <a href="https://facebook.com" target="_blank" className="image">
                {iconFacebook}
            </a>
            <a href="https://pinterest.com" target="_blank" className="image">
                {iconPinterest}
            </a>
            <a href="https://instagram.com" target="_blank" className="image">
                {iconInstagram}
            </a>
        </footer>
    );
};

export default Footer;
