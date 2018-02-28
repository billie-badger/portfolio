import React, { Component} from 'react';
import ReactPlayer from 'react-player';
import {Container} from '../../themes/grid';
import {H1, H2, H3, H4, H5, H6, Blockquote} from '../../themes/types';
import {
        StyledPlayButton, 
        PContainer, 
        KarateSection,
        GuitarSection, 
        AboutMeH1,
        AboutMeH2} from '../../routes/AboutMe/AboutMe.style';



class AboutMe extends Component {
    render() {
        return (
            <Container>
                <AboutMeH1>Who is Will?</AboutMeH1>
                <AboutMeH2>A Karate Master??</AboutMeH2>
                <KarateSection>
                    <PContainer>
                        <H4 align="left">
                        No. But I did teach for 15 years and even moved to Tokyo and trained there for half a year!
                        </H4>
                        <H5 align="right">
                        Here is a rare video of me performing the kata Nijushiho at a black belt ceremony...</H5>
                    </PContainer>
                    <ReactPlayer 
                        //loop
                        controls
                            //playing
                        width='50%'
                        
                        url='https://www.youtube.com/watch?v=9tjVHk7mTLE&t=3s'/>
                    </KarateSection>
                <AboutMeH2>Jimi Hendrix Incarnate??</AboutMeH2>
                <GuitarSection>
                    <ReactPlayer 
                        //loop
                        controls
                            //playing
                        width='50%'
                        
                        url='https://www.youtube.com/watch?v=x9DzGc9fznU'/>
                    <PContainer>
                        <H4 align="left">
                        Wrong again. But I love to play music! Piano, guitar, harmonica, any instrument I can get my hands on.
                        </H4>
                        <H5 align="right">
                        <Blockquote>"Music is the space between the notes." <br/>
                                    -Claude Debussy

                        </Blockquote>
                        </H5>
                    </PContainer>
                </GuitarSection>
            </Container>
        );
    }
}

export default AboutMe;