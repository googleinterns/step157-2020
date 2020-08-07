import React, { Component } from 'react'
import firebase from '../../firebase';

import './SkillPage.css';


class SkillPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillData: {}
    }
  }

  componentDidMount() {
    const skillsRef = firebase.database().ref('skills');
    skillsRef.once('value').then(snapshot => {
      
      snapshot.forEach(skill => {
        let skillObj = skill.val();

        if (skillObj.name.toLowerCase() === this.props.match.params.skillId){
          this.setState({
            skillData: skillObj
          });
        }
      })
    })
  }

  render() {
    let { skillData } = this.state;
    console.log("HI:",  skillData);
    if (Object.keys(skillData).length ===0) {
      return (
        <div>Loading...</div>
      );
    }
    else {
      return (
        <div>
          {skillData.subskills.map(subskill => {
            return (
              <div key={subskill}>{subskill}</div>
            );
          })}
        </div>
      );
    }
  }
}

export default SkillPage