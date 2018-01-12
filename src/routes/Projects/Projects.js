import React, { Component } from 'react';
import { Container } from '../../themes/grid';
import {
        ProjectsContainer,
        ProjectH1
        } from '../Projects/Projects.style';

import {H1, H2} from '../../themes/types';

let projectData = {
  projects: [
    {
      name: 'Fiber Optic Fabrics',
      desc: 'React Single Page Application built to provide product and contact information for Fiber Optic Fabrics.'
    },
    {
      name: 'Vatcher News',
      desc: 'Vue Single Page Application that displays the most recent posts from various news sources.'
    }
  ]
}



class Projects extends Component {

  render() {
    return (
      <Container>
        
        <ProjectH1>Projects!</ProjectH1>
        <H2>Modern Sites</H2>
          <ul>
            <li>Fiber Optic Fabrics</li>
            {

            }
            <li>Vatcher Woodworks</li>
            <li>DJ Robert Romo</li>
            <li>Vatcher News</li>
            <li>Vatcher Translate</li>
          </ul>
        <H2>Legacy Sites</H2>
          <ul>
              <li>Europe Traveler</li>
              <li>Game Picker</li>
              <li>Sapphira Salon</li>
              <li>Jinby Original</li>
              <li>Dove Farms Winery</li>
              <li>Vatchr Design</li>
            </ul>
      </Container>
    );
  }
}

export default Projects;