import React, { Component } from 'react';
import firebase from 'firebase';

import './skill-page.css';
import SubskillCard from '../../components/subskill-card/subskill-card.js';

/* eslint-disable react/destructuring-assignment */
class SkillPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillData: {},
      imgUrl: '',
    };
  }

  componentDidMount() {
    const skillsRef = firebase.database().ref('skills');
    skillsRef.once('value').then((snapshot) => {
      snapshot.forEach((skill) => {
        const skillObj = skill.val();

        if (skillObj.name.toLowerCase() === this.props.match.params.skillId) {
          this.setState({
            skillData: skillObj,
          });

          const imgRef = firebase.storage().ref(`/images/skill_${skillObj.name.toLowerCase()}.jpg`);
          imgRef.getDownloadURL().then((url) => {
            this.setState({
              imgUrl: url,
            });
          });
        }
      });
    });
  }

  render() {
    const { skillData, imgUrl } = this.state;

    if (Object.keys(skillData).length === 0 && imgUrl === '') {
      return (
        <div className="skillpg-container">
          <div className="explore-title-container">
            <div className="explore-title">{skillData.name}</div>
            <div className="explore-subtitle">{skillData.desc}</div>
          </div>
          <div className="subskills-container">Loading...</div>
        </div>
      );
    }
    return (
      <div>
        <img className="skillpg-header-img" src={imgUrl} alt="{skill image}" />
        <div className="skillpg-container">
          <div className="explore-title-container">
            <div className="explore-title">{skillData.name}</div>
            <div className="explore-subtitle">{skillData.desc}</div>
          </div>
          <div className="subskills-container">
            {skillData.subskills.map((subskill) => (
              <SubskillCard category={this.props.match.params.skillId} subskill={subskill} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
/* eslint-enable react/destructuring-assignment */

export default SkillPage;
