import styled from 'styled-components';
import { Flex, Div } from '../../themes/grid';
import media from '../../themes/media';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled(Flex)`
    position: fixed;
    top:0;
    line-height: 80px;
    width: 100%;
    z-index: 700;




 
    ${media.tablet`
        margin: 0 auto;
        background: #212121;
        line-height: normal;
        width: 100vw;
        height: 2em;
        right:0;
        top:0;
    `}
`;

export const NavItem = styled(Link)`
    font-family: 'Racing Sans One', cursive;
    font-size: 1.3em;
    font-weight: bold;
    cursor: pointer;
    color: cyan;
    position: relative;
    text-decoration: none;
    padding-left: 1em;
    padding-right: 1em;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);


    &:hover{
        color: magenta;
        transition: 0.5s;
        &:after {
            content: ' ';
            position: absolute;
            top:0;
            left:0;
            padding: 2px 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
            transform: scale(1.28);
        }
    }
    
    ${media.tablet`
        font-size: .8em;
        margin: 0 auto;
        padding-top: 0.5em;
    `}
    
`;

