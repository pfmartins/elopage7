import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="app-footer">
            <div className="app-footer__copyright">
                {`Copyright © ${currentYear} Elo7. All rights reserved.`}
            </div>
        </div>
    );
}

export default Footer;