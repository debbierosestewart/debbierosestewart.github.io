import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <div className="introduction-text">
              "To plant a garden is to believe in tomorrow."
              <div className="introduction-text__quoted">- Audrey Hepburn</div>
            </div>
            <div className="introduction-text">
              "A party without cake is just a meeting."
              <div className="introduction-text__quoted">- Julia Child</div>
            </div>
            <div className="introduction-text">
              "I like nonsense, it wakes up the brain cells."
              <div className="introduction-text__quoted">- Dr. Seuss</div>
            </div>
          </div>
        );
    }
}

export default IntroductionComponent;
