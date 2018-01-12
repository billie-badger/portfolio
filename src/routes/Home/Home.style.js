import styled, { css } from 'styled-components';
import { coolGreen } from '../../themes/variables';
import media from '../../themes/media';


export const HeroImage = styled.div`

    height: 110vh;
    background-image: url('${require('../../assets/80s_2.png')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 40px;
    margin-top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  

    h1 {
        margin-bottom: 0;
    }
    h3{
       margin-top: 10em; 
       color: cyan;
       font-family: 'Racing Sans One', cursive;
       font-size: 1em;

       ${media.phone`
        margin-top: 15em;
       `}
    }

    ${media.tablet`
        background-image: url('${require('../../assets/80s_2.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}

    ${media.phone`
        background-image: url('${require('../../assets/80s_3.png')}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-size: 1em;
        color: white;
        transform: translateY(-1.5em);
    `}

    
    
`;

export const RevealP = styled.p`
    position: relative;
    margin-top:40px;
    margin-left:20vw;
    margin-right:20vw;
    margin-bottom: 40px;
    &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #212121;
      

        transform-origin: right;
        transform: rotateY(90deg);

        transition: transform 1s;
    }

    ${({ hide }) => hide && css`
        &:after {
            transform: rotateY(0deg);
        }
    `}

    ${media.tablet`
        margin-left: 5vw;
        margin-right: 5vw;
    `}
`;


