import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';

import './skill-page.css';
import SubskillCard from '../../components/subskill-card/subskill-card.js'

class SkillPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillData: {},
      imgUrl: ''
    }
  }

  componentDidMount() {
    const skillsRef = firebase.database().ref('skills');
    skillsRef.once('value').then(snapshot => {
        snapshot.forEach(skill => {
          let skillObj = skill.val();

          if (skillObj.name.toLowerCase() === this.props.match.params.skillId) {
            this.setState({
                skillData: skillObj
            });

            const imgRef = firebase.storage().ref('/images/skill_' + skillObj.name.toLowerCase() + '.jpg');
            imgRef.getDownloadURL().then(url => {
                this.setState({
                    imgUrl: url
                })
            })
          }
        })
      })
    }

  render() {
    let { skillData, imgUrl } = this.state;
    //console.log("sdfklngjg", skillData);
    
    if (Object.keys(skillData).length === 0 && imgUrl === '') {
      return (
        <div className='skillpg-container'>
          <div className='explore-title-container'>
            <div className="explore-title">{skillData.name}</div>
            <div className="explore-subtitle">{skillData.desc}</div>
          </div>
          <div className="subskills-container">Loading...</div>
        </div>
      )
    } else {
        return (
          <div>
            <img className='skillpg-header-img' src={imgUrl} />
            <div className='skillpg-container'>
              <div className='explore-title-container'>
                <div className="explore-title">{skillData.name}</div>
                <div className="explore-subtitle">{skillData.desc}</div>
              </div>
              <div className="subskills-container">
                {skillData.subskills.map(subskill => {
                  return (
                    <SubskillCard category={this.props.match.params.skillId} subskill={subskill}/>
                  )
                })}
              </div>
            </div>
          </div>
        )
    }
  }
}

export default SkillPage

