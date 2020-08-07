import React, { Component } from 'react'
import firebase from '../../firebase';
import { storeSkills } from '../../api/skills-api.js';


import './Explore.css';

import CategoryCard from '../components/CategoryCard'

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: []
    }
  }

  componentDidMount() {
    const skillsRef = storeSkills();

    let skillsArr = [];
    
    skillsRef.once('value').then(snapshot => {
      let promises = [];

      snapshot.forEach(skill => {
        let obj = skill.val();
        skillsArr.push(obj);

        const imgRef = firebase.storage().ref('/images/skill_' + obj.name.toLowerCase() + '.jpg');

        let promise = imgRef.getDownloadURL()
        promises.push(promise);
      })

      return Promise.all(promises);
    }).then(results => {
      for (let i=0; i<skillsArr.length; i++) {
        skillsArr[i].img = results[i];
      }

      this.setState({
        skills: skillsArr
      })
    })
  } 

  render() {
    const categories = this.state.skills;

    if (categories.length === 0) {
      return (
        <div className='explore-container'>
          <div className='explore-title-container'>
            <div className="explore-title">Explore</div>
            <div className="explore-subtitle">Explore different skillsharing categories.</div>
          </div>
          <div className='categories-container'>
            <div>Loading...</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='explore-container'>
          <div className='explore-title-container'>
            <div className="explore-title">Explore</div>
            <div className="explore-subtitle">Explore different skillsharing categories.</div>
          </div>
          <div className='categories-container'>
            {categories.map(category => {
              return (
                <CategoryCard key={category.name} name={category.name} desc={category.desc} img={category.img} subskills={category.subskills} />
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Explore