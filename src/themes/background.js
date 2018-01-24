import styled, { css } from 'styled-components';
import media from './media';

class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parallaxing: true
        };

        this.onEnter = this.onEnter.bind(this);
    }

    const b = document.getElementsByTagName("BODY")[0];  
    const d= document.getElementsByClassName("display")[0];

    b.addEventListener("mousemove", function(event) {
    parallaxed(event);

    });

    function parallaxed(e) {
      var amountMovedX = (e.clientX * -0.3 / 8);
      var amountMovedY = (e.clientY * -0.3 / 8);
      var x = document.getElementsByClassName("parallaxed");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
      }
}

    }

    render() {
        return (
            <div>
                <Waypoint 
                    onEnter={this.onEnter}>
                </Waypoint>
                {this.props.children({ isInView: this.state.isInView })}
            </div>
        );
    }
}

export default Parallax;