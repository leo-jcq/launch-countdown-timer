import { FC } from 'react';
import { iconFacebook, iconInstagram, iconPinterest } from '../../assets/assets';
import './Footer.scss';

const Footer: FC = () => {
    return (
        <footer className="footer" role="contentinfo">
            <a
                href="https://facebook.com"
                target="_blank"
                className="image"
                aria-label="Our Facebook">
                {iconFacebook}
            </a>
            <a href="https://pinterest.com" target="_blank" className="image"
                aria-label="Our Pinterest">
                {iconPinterest}
            </a>
            <a href="https://instagram.com" target="_blank" className="image"
                aria-label="Our Instagram">
                {iconInstagram}
            </a>
        </footer>
    );
};

export default Footer;
