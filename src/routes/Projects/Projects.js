import React, { Component } from 'react';
import { Container } from '../../themes/grid';
import {
        ProjectsContainer,
        ProjectH1,
        Project1,
        Project2,
        Project3,
        Project4,
        Project5,
        
        } from '../Projects/Projects.style';

import {H1, H2} from '../../themes/types';




class Projects extends Component {

  render() {
    return (
      <Container>
        
        <ProjectH1>Projects!</ProjectH1>
        <Project1 />
        <a href='https://elated-clarke-73f7a0.netlify.com/#/' target='_blank'><Project2 /></a>
        <a href='http://vatchrdesign.x10host.com/dovefarms/' target='_blank'><Project3 /></a>
        <a href='http://vatchrdesign.x10host.com/try%20cube/#.WmrlSIjwaUk' target='_blank'><Project4 /></a>
        <a href='http://vatchrdesign.x10host.com/Jinby/' target='_blank'><Project5 /></a>
        
      </Container>
    );
  }
}

export default Projects;