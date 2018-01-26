import React, { Component } from 'react';
import { SocialContainer, Github, Linkedin } from './SocialBar.style';


class SocialBar extends Component {
    render() {
        return (
            <SocialContainer>
                <a href='https://github.com/billie-badger' target='_blank'><Github /></a>
                <Linkedin></Linkedin>
            </SocialContainer>
        );
    }
}

export default SocialBar;