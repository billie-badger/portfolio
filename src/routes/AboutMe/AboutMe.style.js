import styled  from 'styled-components';
import {Relative, Flex} from '../../themes/grid';
import PlayButton from '../../components/PlayButton/PlayButton';
import media from '../../themes/media';
import { H1, H2 } from '../../themes/types';



export const StyledPlayButton = styled(PlayButton)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%); 
`;

export const PContainer = styled(Relative)`
    flex-direction: row;
    margin-right: 20px;
    margin-left: 20px;
    align-self: center;
`;

export const KarateSection = styled(Flex)`
    margin: 5em;
    margin-top: 4em;
    
    ${media.desktop`
        flex-direction: column;
        align-items: center;
        margin-left: 15px;
        margin-right: 15px;
    `}
`;

export const AboutMeH1 = styled(H1)`
    position: relative;
    margin: 0 auto;
    top: 1.5em;
    font-family: 'Racing Sans One', cursive;
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    color: magenta;
    text-decoration: none;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;

export const GuitarSection = styled(Flex)`
    margin: 5em;
    margin-top: 4em;
    ${media.desktop`
        flex-direction: column;
        align-items: center;
        margin-left: 15px;
        margin-right: 15px;
    `}
`;

export const AboutMeH2 = styled(H2)`
    position: relative;
    margin: 0 auto;
    margin-top: 3em;
    font-family: 'Racing Sans One', cursive;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    color: cyan;
    text-decoration: none;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
`;



