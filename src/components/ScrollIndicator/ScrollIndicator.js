import React, { Component } from 'react';
import {OuterWrapper, Wrapper, Line, Arrow} from './ScrollIndicator.style';


class ScrollIndicator extends Component {
    render() {
        return (
            <OuterWrapper>
                <Wrapper>
                    <Line />
                    <Arrow />
                </Wrapper>
            </OuterWrapper>       
        );
    }
}

export default ScrollIndicator;