import React from 'react';
import Icon from './icon';

// flex div ---> pass prop image 
export default function icons() {
    return (
        <div className="flex flex-row align-center justify-center gap-x-3">
            <span className="transition-transform duration-200 hover:scale-125"><Icon link="https://discord.com/invite/9RJjxpeaBU" src="/Discord.svg" alt="Discord"/></span>
            <span className="transition-transform duration-200 hover:scale-125"><Icon link="https://www.instagram.com/3dwestern/" src="/Instagram.svg" alt="Instagram" /></span>
            <span className="transition-transform duration-200 hover:scale-125"><Icon link="https://www.linkedin.com/company/3d-western/" src="/Linkedin.svg" alt="LinkedIN" /></span>
            <span className="transition-transform duration-200 hover:scale-125"><Icon link="mailto:3dprinting.club@westernusc.ca" src="/mail.svg" alt="email" /></span>
        </div>
    );
}