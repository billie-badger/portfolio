import styled from 'styled-components';
import {Container} from '../../themes/grid';
import { H1 } from '../../themes/types';
import media from '../../themes/media';


export const ProjectsContainer = styled(Container)`
    margin-left: 6.5vw;
`;

export const ProjectH1 = styled(H1)`
    margin-top: 15vh;
    margin-left: 6.5vw;
`;

export const ProjectImage = styled.div`

    height: 100vh;
    background-image: url('${require('../../assets/Projects/fof.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 40px;
    margin-top: 0;
    margin-left: -40px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  


       ${media.phone`
        margin-top: 15em;
       `}
    }

    ${media.tablet`
        background-image: url('${require('../../assets/Projects/fof.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}

    ${media.phone`
        background-image: url('${require('../../assets/Projects/fof.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-size: 1em;
        color: white;
        transform: translateY(-1.5em);
    `}

    
    
`;