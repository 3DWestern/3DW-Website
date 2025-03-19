import React from 'react';
import Icon from './icon';

// flex div ---> pass prop image 
export default function icons () {
    return (
        <div className="flex flex-row align-center justify-center gap-x-2">
        <Icon link="discord.com" src="/Discord.svg" alt="Discord" />
        <Icon link="instagram.com" src="/Instagram.svg" alt="Instagram" />
        <Icon link="linkedin.com" src="/Linkedin.svg" alt="LinkedIN" />
        <Icon link="email" src="/mail.svg" alt="email" />
        </div>
    );
}