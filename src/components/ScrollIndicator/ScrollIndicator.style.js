import styled, { css, keyframes } from 'styled-components';
import { coolGreen } from '../../themes/variables';
import media from '../../themes/media';

const trail = keyframes`
    from{
        height: 0px;
    }
    to{
        height: 100px;
        background-color: cyan;
    } 
`;

const swipe = keyframes`
    from{
        top: 40px;
    }
    to{
        
        border-color: cyan;
    }
`;

export const OuterWrapper = styled.div`
    position: absolute;
    top: 80vh;
    bottom: 20vh;
    left: 85%;

    ${media.phone`
        top: 65vh;
    `}

    
`;

export const Wrapper = styled.div`
    position: relative;
    width: 30px;
`;

export const Line = styled.div`
    position: absolute;
    top: 50px;
    left: 14px;
    width: 2px;
    height: 60px;
    background-color: black;
    animation: ${trail} 1.5s infinite alternate;
    
`;

export const Arrow = styled.div`
    color: magenta;
    &:before{
        border-style: solid;
        border-width: 2px 2px 0 0;
        content: '';
        display: inline-block;
        height: 10px;
        position: relative;
        top: 150px;
        transform: rotate(135deg);
        vertical-align: top;
        width: 10px;
        animation: ${swipe} 1.5s infinite alternate;
    }
`;



