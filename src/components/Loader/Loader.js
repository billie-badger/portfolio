import React, { Component } from 'react';
import {LoadingImg} from './Loader.style';

class Loader extends Component {
    render() {
        return (
            <div>
                <LoadingImg />
                <h3>Loading</h3>
            </div>
        );
    }
}

export default Loader;