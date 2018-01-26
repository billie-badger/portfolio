import React, { Component } from 'react';
import { BrowserRouter as Router,
        Route, 
        Switch,
        browserHistory
         } from 'react-router-dom';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import { 
        CalmBackground, 
        AngryBackground, 
        MagBrushStroke, 
        CyanBrushStroke 
        } from '../App.style';
        
import NavigationBar from '../components/NavigationBar/NavigationBar';
import ReallySmoothScroll from 'really-smooth-scroll';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import SocialBar from '../components/SocialBar/SocialBar';

ReallySmoothScroll.shim();

class Routes extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <div>
                        <CalmBackground />
                        <AngryBackground />
                        <MagBrushStroke />
                        <CyanBrushStroke />
                        <NavigationBar />
                        <SocialBar />
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/projects' exact component={Projects} />
                            <Route path='/aboutme' exact component={AboutMe} />
                        </Switch>
                    </div>
                </ScrollToTop>
            </Router>
        );
    }   
}

export default Routes;

