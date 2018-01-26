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
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        
      </Container>
    );
  }
}

export default Projects;