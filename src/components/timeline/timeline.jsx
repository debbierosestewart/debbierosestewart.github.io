import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false,
          expanded4: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpandChange4 = (expanded4) => {
      this.setState({expanded4: expanded4});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleExpand4 = () => {
      this.setState({expanded4: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };

    handleReduce4 = () => {
      this.setState({expanded4: false});
    };
    render() {
      const cardHeaderStyles = {
        root: {
          textAlign: 'left'
        },
        title: {
          fontSize: "16px"
        },
        subtitle: {
          paddingLeft: "7px"
        }
      }
        return (
          <div>
            <div className="timeline">
              <p className="headline">Experience</p>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                      style={cardHeaderStyles.root}
                      title="Sedgefield Intermediate School"
                      titleStyle={cardHeaderStyles.title}
                      subtitle="Goose Creek, South Carolina"
                      subtitleStyle={cardHeaderStyles.subtitle}
                      actAsExpander={true} showExpandableButton={true} />
                    <CardText expandable={true}>
                      <div className="timeline__date-range">
                        August 2011 – June 2017
                      </div>
                      <div className="timeline__achievements">
                        <div className="timeline__achievement">
                          Teacher of the Year 2015 - 2016
                        </div>
                        <div className="timeline__achievement">
                          Rookie Teacher of the Year 2011 – 2012
                        </div>
                      </div>
                      <div className="timeline__positions">
                        <div className="timeline__position">
                          4th Grade Gifted and Talented Teacher
                        </div>
                        <div className="timeline__position">
                          5th Grade Teacher
                        </div>
                      </div>
                      <ul>
                        <li>Plan and facilitate lessons in all subject areas to assess mastery of the South Carolina College and Career Readiness Standards</li>
                        <li>Establish and maintain high standards for acceptable behavior through the implementation of the 7 Habits in the Leader in Me as a member of the school Lighthouse Team</li>
                        <li>Participate in weekly professional learning community meetings to collaborate on scope of lesson units utilizing backwards design with data analysis through Mastery Connect</li>
                        <li>Lead the Community Builders team to create and implement content for school wide pep rallies, assemblies, and family outreach events</li>
                        <li>Coordinate grade level participation and data collection for the implementation of our school wide goals in mathematics and reading fluency</li>
                      </ul>
                    </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                    <CardHeader
                      style={cardHeaderStyles.root}
                      title="N.E. Miles Early Childhood Development Center"
                      titleStyle={cardHeaderStyles.title}
                      subtitle="Charleston, South Carolina"
                      subtitleStyle={cardHeaderStyles.subtitle}
                      actAsExpander={true} showExpandableButton={true}/>
                    <CardText expandable={true}>
                      <div className="timeline__date-range">
                        August 2008 – July 2010
                      </div>
                      <div className="timeline__positions">
                        <div className="timeline__position">
                          Graduate Assistant
                        </div>
                      </div>
                      <ul>
                        <li>Assist Master Teacher in all aspects of facilitating the lesson plans for the school day</li>
                        <li>Collaborate with Master Teacher and Co-Graduate Assistant to develop lesson plans</li>
                        <li>Participate in formative and summative assessment of skills of the students</li>
                      </ul>
                    </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                    <CardHeader
                      style={cardHeaderStyles.root}
                      title="Marbles Kids Museum"
                      titleStyle={cardHeaderStyles.title}
                      subtitle="Raleigh, North Carolina"
                      subtitleStyle={cardHeaderStyles.subtitle}
                      actAsExpander={true} showExpandableButton={true}/>
                    <CardText expandable={true}>
                      <div className="timeline__date-range">
                        June 2005 – June 2008
                      </div>
                      <div className="timeline__positions">
                        <div className="timeline__position">
                          Museum Educator
                        </div>
                      </div>
                      <ul>
                        <li>Design, produce, schedule and implement informal education programs and exhibitions for museum visitors</li>
                        <li>Develop, implement and facilitate formal education programs for scheduled school groups visitors, grades second through nine</li>
                        <li>Interview, train and supervise visitor experience staff in program delivery</li>
                      </ul>
                    </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                      <CardHeader
                        style={cardHeaderStyles.root}
                        title="Education"
                        titleStyle={cardHeaderStyles.title}
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                        <div className="timeline__education">
                          <div className="timeline__education--main-line">
                            Master of Arts in Teaching Elementary Education
                          </div>
                          <div className="timeline__education--sub-line">
                            December 2010 graduated Suma Cum Laude
                          </div>
                          <div className="timeline__education--sub-line">
                            College of Charleston, Charleston, South Carolina
                          </div>
                          <div className="timeline__education--awards">
                            <div className="timeline__education--sub-line">
                              Outstanding M.A.T Elementary Education Student
                            </div>
                            <div className="timeline__education--sub-line">
                              Dr. Nathan E. Miles Scholar
                            </div>
                          </div>
                        </div>
                        <div className="timeline__education">
                          <div className="timeline__education--main-line">
                             Bachelor of Arts, Communications
                          </div>
                          <div className="timeline__education--sub-line">
                            June 2003 graduated Magna Cum Laude
                          </div>
                          <div className="timeline__education--sub-line">
                            North Carolina State University, Raleigh, North Carolina
                          </div>
                          <div className="timeline__education--awards">
                            <div className="timeline__education--sub-line">
                              Caldwell Fellows Scholar
                            </div>
                          </div>
                        </div>
                      </CardText>
                  </Card>
                </div>
            </div>
            <a className="fullresume" target="_blank" href="DebbieRStewartResume2018.pdf">Full Resume</a>
          </div>
        );
    }
}

export default TimelineComponent;
