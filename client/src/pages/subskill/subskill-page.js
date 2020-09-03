import React, { Component } from 'react';
import firebase from 'firebase';

import './subskill-page.css';

/* eslint-disable react/destructuring-assignment */
class SubskillPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subskillData: {},
      totalTeaching: 0,
      totalLearning: 0,
      teachers: [],
    };

    this.goBack = this.goBack.bind(this);
  }

  /* eslint-disable no-restricted-syntax */
  /* eslint-disable guard-for-in */
  componentDidMount() {
    const currSkillCategory = this.props.match.params.skillId;
    const currSubskill = this.props.match.params.subskillId;

    const skillsRef = firebase.database().ref('skills2');
    skillsRef.once('value').then((snapshot) => {
      for (const key in snapshot.val()) {
        const skillObj = snapshot.val()[key];

        if (key.toLowerCase() === currSkillCategory) {
          const {subskills} = skillObj;

          for (let i = 0; i < subskills.length; i += 1) {
            if (subskills[i].name.toLowerCase() === currSubskill) {
              this.setState({
                subskillData: subskills[i],
              });
            }
          }
        }
      }
    });

    const usersRef = firebase.database().ref('users');
    let totTeach = 0;
    let totLearn = 0;
    const teachers = [];

    usersRef.once('value').then((snapshot) => {
      snapshot.forEach((user) => {
        const userObj = user.val();
        console.log(userObj);

        if (userObj.skillsToLearn.includes(currSubskill)) {
          console.log('tryna learn');
          totLearn += 1;
        }
        if (userObj.skillsToTeach.includes(currSubskill)) {
          console.log('tryna teach');
          totTeach += 1;
          teachers.push(userObj);
        }
      });
    }).then(() => {
      this.setState({
        totalTeaching: totTeach,
        totalLearning: totLearn,
        teachers,
      });
    });
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const {
      subskillData, totalTeaching, totalLearning, teachers,
    } = this.state;
    const currSkillCategory = this.props.match.params.skillId;

    if (Object.keys(subskillData).length === 0) {
      return (
        <div>Buffering...</div>
      );
    }

    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div className="subskillpg-container">
        <div className="subskillpg-back" onClick={this.goBack}>
          Back to
          {currSkillCategory}
          {' '}
          page
        </div>
        <div className="subskillpg-columns-container">
          <div className="subskillpg-left-container">
            <div className="subskillpg-title">{subskillData.name}</div>
            <div className="subskillpg-subtitle">{subskillData.desc}</div>
            <div className="subskill-stats-container">
              <div>
                {totalTeaching}
                {' '}
                teaching
              </div>
              <div>
                {totalLearning}
                {' '}
                learning
              </div>
            </div>
          </div>
          <div className="subskillpg-right-container">
            <div className="subskill-people-container">
              <div className="teachers-title">Teachers</div>
              {teachers.map((teacher) => (
                <div className="teacher-container">
                  <div>{teacher.name}</div>
                  <div>{teacher.bio}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubskillPage;
