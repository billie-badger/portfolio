import React, { Component } from 'react';
import { SocialContainer, Github, Linkedin, Resume, Codepen } from './SocialBar.style';


class SocialBar extends Component {
    render() {
        return (
            <SocialContainer>
                <a href='https://github.com/billie-badger' target='_blank'><Github /></a>
                <a href='https://www.linkedin.com/in/will-vatcher-9705b340/' target='_blank'><Linkedin /></a>
                <a href='https://codepen.io/willvatcher/' target='_blank'><Codepen /></a>
                <a href ='https://github.com/billie-badger/Resume/blob/master/Will_Vatcher.pdf' target='_blank'><Resume /></a>
            </SocialContainer>
        );
    }
}

export default SocialBar;