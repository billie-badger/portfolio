import styled from 'styled-components';
import { Flex, Div } from '../../themes/grid';
import media from '../../themes/media';

export const SocialContainer = styled(Flex)`
    position: fixed;
    flex-direction: column;
    bottom: 1em;
    width: 60px;
    margin-left: 1em;
    align-items: center;
    z-index: 600;

    ${media.tablet`
        position: fixed;
        
        flex-direction: row;
        margin-left: 0;
        top: -70vh;
        width: 100%;
        justify-content: space-around;

    `}
`;

export const Github = styled(Flex)`
    
    height:40px;
    width:40px;
    background-image: url('${require('../../assets/Social/github.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 1em;
    
`;

export const Linkedin = styled(Flex)`

    height:40px;
    width:40px;
    background-image: url('${require('../../assets/Social/linkedin.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 1em;
    
`;


export const Codepen = styled(Flex)`

    height:40px;
    width:40px;
    background-image: url('${require('../../assets/Social/codepen.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 1em;
    
`;

export const Resume = styled(Flex)`

    height:40px;
    width:40px;
    background-image: url('${require('../../assets/Social/resume.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 1em;
    
`;