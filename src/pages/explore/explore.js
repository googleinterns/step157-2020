import React, {Component} from 'react';
import firebase from '../../firebase';
import storeSkills from '../../api/skills-api.js';

import './explore.css';

// Components
import CategoryCard from '../../components/category-card/category-card.js';

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [],
    };
  }

  componentDidMount() {
    const skillsRef = storeSkills();

    const skillsArr = [];

    skillsRef.once('value').then((snapshot) => {
      const promises = [];

      snapshot.forEach((skill) => {
        const obj = skill.val();
        skillsArr.push(obj);

        const imgRef = firebase.storage().ref(`/images/skill_${obj.name.toLowerCase()}.jpg`);

        const promise = imgRef.getDownloadURL();
        promises.push(promise);
      });

      return Promise.all(promises);
    }).then((results) => {
      for (let i = 0; i < skillsArr.length; i += 1) {
        skillsArr[i].img = results[i];
      }

      this.setState({
        skills: skillsArr,
      });
    });
  }

  render() {
    const {skills} = this.state;
    const categories = skills;

    if (categories.length === 0) {
      return (
        <div className="explore-container">
          <div className="explore-title-container">
            <div className="explore-title">Explore</div>
            <div className="explore-subtitle">Explore different skillsharing categories.</div>
          </div>
          <div className="categories-container">
            <div>Loading...</div>
          </div>
        </div>
      );
    }
    return (
      <div className="explore-container">
        <div className="explore-title-container">
          <div className="explore-title">Explore</div>
          <div className="explore-subtitle">Explore different skillsharing categories.</div>
        </div>
        <div className="categories-container">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              desc={category.desc}
              img={category.img}
              subskills={category.subskills}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Explore;
