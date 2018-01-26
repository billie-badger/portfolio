import styled from 'styled-components';
import { Flex, Div } from '../../themes/grid';

export const SocialContainer = styled(Flex)`
    position: fixed;
    flex-direction: column;
    bottom: 1em;
    width: 60px;
    margin-left: 1em;

    align-items: center;
    z-index: 800;
`;

export const Github = styled(Flex)`
    
    height:50px;
    width:50px;
    background-image: url('${require('../../assets/Social/github.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 1em;
    
`;

export const Linkedin = styled(Flex)`

    height:50px;
    width:50px;
    background-image: url('${require('../../assets/Social/linkedin.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 1em;
    
`;

export const Resume = styled(Flex)`

    height:50px;
    width:50px;
    background-image: url('${require('../../assets/Social/resume.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 1em;
    
`;