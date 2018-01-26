import styled from 'styled-components';
import {Container} from '../../themes/grid';
import { H1 } from '../../themes/types';
import media from '../../themes/media';


export const ProjectsContainer = styled(Container)`
    margin-left: 6.5vw;
`;

export const ProjectH1 = styled(H1)`
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

    ${media.tablet`
        top: 1em;
    `}

    ${media.phone`
        top: 1em;
    `}
`;

export const Project1 = styled.div`

    height: 100vh;
    width: 90%;
    background-image: url('${require('../../assets/Projects/fof.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 1em;
    margin-top: 4em;
    box-shadow: 5px 5px 25px 5px rgba(0,0,0,0.5);

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    opacity: 0.8;
    transition: all 300ms ease-in-out;

    &:hover{
        opacity: 1;
    }
  


       
    }

    ${media.desktop`
        height: 60vh;
    `}

    ${media.tablet`

        height: 50vh;
        margin: 0 auto;
        margin-top: 2.5em;
        background-image: url('${require('../../assets/Projects/fof.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}

    ${media.phone`

        height: 50vh;
        margin-top: 4em;
        background-image: url('${require('../../assets/Projects/fof.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-size: 1em;
        color: white;
        
    `}

    
    
`;

export const Project2 = styled.div`

    height: 100vh;
    width: 90%;
    background-image: url('${require('../../assets/Projects/vatcher-news.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin:5%;
    box-shadow: 5px 5px 25px 5px rgba(0,0,0,0.5);
    

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    opacity: 0.8;
    transition: all 300ms ease-in-out;

    &:hover{
        opacity: 1;
    }
  


       
    }

    ${media.desktop`
        height: 60vh;
    `}

    ${media.tablet`

        height: 50vh;
        background-image: url('${require('../../assets/Projects/vatcher-news.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}

    ${media.phone`

        height: 50vh;
        margin-top: 3em;
        background-image: url('${require('../../assets/Projects/vatcher-news.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-size: 1em;
        color: white;
        transform: translateY(-1.5em);
    `}

    
    
`;

export const Project3 = styled.div`

    height: 100vh;
    width: 90%;
    background-image: url('${require('../../assets/Projects/dove-farms.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin:5%;
    box-shadow: 5px 5px 25px 5px rgba(0,0,0,0.5);
    

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    opacity: 0.8;
    transition: all 300ms ease-in-out;

    &:hover{
        opacity: 1;
    }
  


       
    }

    ${media.desktop`
        height: 60vh;
    `}

    ${media.tablet`

        height: 50vh;
        background-image: url('${require('../../assets/Projects/dove-farms.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}

    ${media.phone`

        height: 50vh;
        margin-top: 3em;
        background-image: url('${require('../../assets/Projects/dove-farms.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-size: 1em;
        color: white;
        transform: translateY(-1.5em);
    `}

    
    
`;

export const Project4 = styled.div`

    height: 100vh;
    width: 90%;
    background-image: url('${require('../../assets/Projects/vatchr-design.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin:5%;
    box-shadow: 5px 5px 25px 5px rgba(0,0,0,0.5);
    

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    opacity: 0.8;
    transition: all 300ms ease-in-out;

    &:hover{
        opacity: 1;
    }
  


       
    }

    ${media.desktop`
        height: 60vh;
    `}

    ${media.tablet`

        height: 50vh;
        background-image: url('${require('../../assets/Projects/vatchr-design.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}

    ${media.phone`

        height: 50vh;
        margin-top: 3em;
        background-image: url('${require('../../assets/Projects/vatchr-design.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-size: 1em;
        color: white;
        transform: translateY(-1.5em);
    `}

    
    
`;

export const Project5 = styled.div`

    height: 100vh;
    width: 90%;
    background-image: url('${require('../../assets/Projects/jinby.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin:5%;
    box-shadow: 5px 5px 25px 5px rgba(0,0,0,0.5);
    

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    opacity: 0.8;
    transition: all 300ms ease-in-out;

    &:hover{
        opacity: 1;
    }
  


       
    }

    ${media.desktop`
        height: 60vh;
    `}

    ${media.tablet`

        height: 50vh;
        background-image: url('${require('../../assets/Projects/jinby.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}

    ${media.phone`

        height: 50vh;
        margin-top: 3em;
        background-image: url('${require('../../assets/Projects/jinby.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-size: 1em;
        color: white;
        transform: translateY(-1.5em);
    `}

    
    
`;

export const Project6 = styled.div`

    height: 100vh;
    width: 90%;
    background-image: url('${require('../../assets/Projects/california-gardens.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin:5%;
    box-shadow: 5px 5px 25px 5px rgba(0,0,0,0.5);
    

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    opacity: 0.8;
    transition: all 300ms ease-in-out;

    &:hover{
        opacity: 1;
    }
  


       
    }

    ${media.desktop`
        height: 60vh;
    `}

    ${media.tablet`

        height: 50vh;
        background-image: url('${require('../../assets/Projects/california-gardens.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}

    ${media.phone`

        height: 50vh;
        margin-top: 3em;
        background-image: url('${require('../../assets/Projects/california-gardens.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-size: 1em;
        color: white;
        transform: translateY(-1.5em);
    `}

    
    
`;

