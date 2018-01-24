import React, { Component } from 'react';
import {Container} from '../../themes/grid';
import {
            Image, 
            HeroImage,
            RevealP,
            } from './Home.style';

import WhenInView from '../../components/WhenInView/WhenInView';
import ScrollIndicator from '../../components/ScrollIndicator/ScrollIndicator';


class Home extends Component {
    render() {
        return (
            <Container>
               <HeroImage>
                    <h3>Front-end Developer</h3>
                    <ScrollIndicator/>    
                </HeroImage>
                <WhenInView>
                    {({isInView}) => 
                        <RevealP hide={!isInView}>Let's fast forward all the way... to the year 2000. I entered my 8th grade science fair with a website that I had created using only HTML to replace my school's website. While my middle school did not adopt my creation, a small fire had been ignited.
                        </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({isInView}) => 
                        <RevealP hide={!isInView}>Over the next 17 years, I would pursue various passions in the attempt of fulfilling the old adage of, "Love what you do and you'll never work a day in your life." It was only when I decided to kindle the flame of development that had been lit so many years ago that I began to understand.
                        </RevealP>
                    }
                </WhenInView>  
                <WhenInView>
                    {({isInView}) => 
                        <RevealP hide={!isInView}>I love creating and I am grateful to live in a world with so many options to do so...
                        </RevealP>
                    }
                </WhenInView>  
            </Container>
        );
    }
}

export default Home;