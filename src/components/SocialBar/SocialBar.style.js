import styled from 'styled-components';
import { Flex, Div } from '../../themes/grid';

export const SocialContainer = styled(Flex)`
    position: fixed;
    margin-top: -100px;
    width: 100%;
    height: 80px;
    justify-content: flex-end;
    align-items: center;
    z-index: 800;
`;

export const Github = styled(Flex)`
    margin-right: 1.5em;
    height:50px;
    width:50px;
    background-image: url('${require('../../assets/Social/github.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
`;

export const Linkedin = styled(Flex)`
    margin-right: 1.5em;
    height:50px;
    width:50px;
    background-image: url('${require('../../assets/Social/linkedin.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
`;