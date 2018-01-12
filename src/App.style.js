import styled from 'styled-components';
import { coolGreen, cyan } from './themes/variables';
import media from './themes/media';

export const CalmBackground = styled.div`
    position:fixed;
    margin: 0 auto;
    left: 47vw;
    width: 100vw;
    top: 10vh;
    height: 100vh;
    background-image: url(${require('./assets/selfie2.png')});
    opacity: 0.6;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -995;
`;

export const AngryBackground = styled.div`
    position:fixed;
    right: 47vw;
    width: 100vw;
    top: 10vh;
    height: 100vh;
    background-image: url(${require('./assets/selfie3.png')});
    opacity: 0.6;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -995;
`;

export const MagBrushStroke = styled.div`
    position:fixed;
    right: 40vw;
    width: 100vw;
    top: 0;
    height: 150vh;
    background-image: url(${require('./assets/magBrush.png')});
    opacity: 0.5;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -999;

    ${media.desktop`
        background-size: 90%;
    `}
`;

export const CyanBrushStroke = styled.div`
    position:fixed;
    margin: 0 auto;
    left: 40vw;
    width: 100vw;
    top: -60vh;
    height: 150vh;
    background-image: url(${require('./assets/cyanBrush.png')});
    opacity: 0.5;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -998;

    ${media.desktop`
        top: -40vh;
        background-size: 90%;
    `}

    ${media.phone`
        top: -30vh;
    `}

    
`;