import React, { Component } from 'react';
import firebase from 'firebase';

import './subskill-page.css';

class SubskillPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subskillData: {},
      totalTeaching: 0,
      totalLearning: 0,
      teachers: []
    }

    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const currSkillCategory = this.props.match.params.skillId;
    const currSubskill = this.props.match.params.subskillId;

    const skillsRef = firebase.database().ref('skills2');
    skillsRef.once('value').then(snapshot => {
      for (var key in snapshot.val()) {
        let skillObj = snapshot.val()[key];

        if (key.toLowerCase() === currSkillCategory) {
          let subskills = skillObj.subskills;

          for (let i=0; i<subskills.length; i++) {
            if (subskills[i].name.toLowerCase() === currSubskill) {
              this.setState({
                  subskillData: subskills[i]
              });
            }
          }
        }
      }
    })

    const usersRef = firebase.database().ref('users');
    let totTeach = 0;
    let totLearn = 0;
    let teachers = []

    usersRef.once('value').then(snapshot => {
        snapshot.forEach(user => {
          let userObj = user.val();
          console.log(userObj)

          if (userObj.skillsToLearn.includes(currSubskill)) {
            console.log("tryna learn")
            totLearn++;
          }
          if (userObj.skillsToTeach.includes(currSubskill)) {
            console.log("tryna teach")
            totTeach++;
            teachers.push(userObj);
          }
        })
    }).then(() => {
        this.setState({
          totalTeaching: totTeach,
          totalLearning: totLearn,
          teachers: teachers
        })
    })
  }
  goBack() {
      this.props.history.goBack();
  }

  render() {
    let { subskillData, totalTeaching, totalLearning, teachers } = this.state;
    const currSkillCategory = this.props.match.params.skillId;
    
    if (Object.keys(subskillData).length === 0) {
      return (
          <div>Buffering...</div>
      )
    } 
    else {
      return (
        <div className='subskillpg-container'>
          <div className='subskillpg-back' onClick={this.goBack}>Back to {currSkillCategory} page</div>
          <div className="subskillpg-columns-container">
            <div className="subskillpg-left-container">
              <div className='subskillpg-title'>{subskillData.name}</div>
              <div className='subskillpg-subtitle'>{subskillData.desc}</div>
              <div className="subskill-stats-container">
                  <div>{totalTeaching} teaching</div>
                  <div>{totalLearning} learning</div>
              </div>
            </div>
            <div className="subskillpg-right-container">
              <div className="subskill-people-container">
                <div className="teachers-title">Teachers</div>
                {teachers.map(teacher => {
                    return (
                      <div className="teacher-container">
                          <div>{teacher.name}</div>
                          <div>{teacher.bio}</div>
                      </div>
                    )
                })}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default SubskillPage