import React, { Component } from 'react';
import firebase from 'firebase';

class SubskillPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subskillData: {},
    };
  }

  componentDidMount() {
    const skillsRef = firebase.database().ref('skills');
    skillsRef.once('value').then((snapshot) => {
      snapshot.forEach((skill) => {
        const skillObj = skill.val();
        /* eslint-disable react/destructuring-assignment */
        if (skillObj.name.toLowerCase() === this.props.match.params.skillId) {
          const {subskills} = skillObj;

          for (let i = 0; i < subskills.length; i += 1) {
            if (subskills[i].name.toLowerCase() === this.props.match.params.subskillId) {
              this.setState({
                subskillData: subskills[i],
              });
            }
          }
        }
        /* eslint-enable react/destructuring-assignment */
      });
    });
  }

  render() {
    const { subskillData } = this.state;

    if (Object.keys(subskillData).length === 0) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <div>{subskillData.name}</div>
        <div>{subskillData.desc}</div>
      </div>
    );
  }
}

export default SubskillPage;
