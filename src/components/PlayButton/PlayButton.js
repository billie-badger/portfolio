import React from 'react';
import {Motion, spring} from 'react-motion';

export default function PlayButton({hover, ...rest}) {
    return(
        <Motion style= {{offset: spring(hover ? 0:214) }}>
            {({offset}) =>
                <svg width='57' height='106' viewBox='-4 -10 57 106' {...rest}>
                    <polygon 
                    id='small'
                    stroke='rgba(0, 155, 138, 1)' fill='none' points='0 42.9371985 0 -0.125603023 46.9776016 42.9371985 0 86'/>
                    <polygon
                        id='big' 
                        stroke='rgba(0, 155, 138, 1)' 
                        strokeWidth='10' 
                        strokeDashoffset={offset}
                        strokeDasharray={214} 
                        fill='none' 
                        points='0 42.9371985 0 -0.125603023 46.9776016 42.9371985 0 86'/>
                        
                </svg>
            }
        </Motion>
            
    );
}