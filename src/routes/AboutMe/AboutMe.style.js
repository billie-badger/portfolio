import styled  from 'styled-components';
import {Relative, Flex} from '../../themes/grid';
import PlayButton from '../../components/PlayButton/PlayButton';
import media from '../../themes/media';
import { H1 } from '../../themes/types';



export const VideoContainer = styled(Relative)`
    box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.4);
    width: 50vw;
 
    ${media.tablet`
        width: 100%;
    `}
    flex-shrink: 0;
    flex-grow: 0;
    cursor: pointer;
`;

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
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 70px;
    ${media.tablet`
        flex-direction: column;
        margin-left: 15px;
        margin-right: 15px;
    `}
`;

export const AboutMeH1 = styled(H1)`
    margin-top: 15vh;
    margin-left: 6.5vw;
`;

export const GuitarSection = styled(Flex)`
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 80px;
    ${media.tablet`
        flex-direction: column;
        margin-left: 15px;
        margin-right: 15px;
    `}
`;

