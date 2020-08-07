import React, { Component } from 'react';
import firebase from 'firebase';

import './subskill-page.css';

class SubskillPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        subskillData: {}
    }
  }

  componentDidMount() {
    const skillsRef = firebase.database().ref('skills');
    skillsRef.once('value').then(snapshot => {
        snapshot.forEach(skill => {
          let skillObj = skill.val();

          if (skillObj.name.toLowerCase() === this.props.match.params.skillId) {
            let subskills = skillObj.subskills;
            
            for (let i=0; i < subskills.length; i++) {
              if (subskills[i].name.toLowerCase() === this.props.match.params.subskillId) {
                  this.setState({
                    subskillData: subskills[i]
                });
              }
            }
          }
        })
    })
  }

  render() {
    let { subskillData } = this.state;
    
    if (Object.keys(subskillData).length === 0) {
      return (
          <div>Loading...</div>
      )
    } else {
      return (
          <div>
              <div>{subskillData.name}</div>
              <div>{subskillData.desc}</div>
          </div>
      )
    }
  }
}

export default SubskillPage