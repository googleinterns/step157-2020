import React, { Component, Fragment } from 'react'
import firebase from '../../firebase';

import './Explore.css';

// Components
import CategoryCard from '../components/CategoryCard'

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillsArr: []
    }
  }

  componentDidMount() {
    const skillsRef = firebase.database().ref('skills');
    let skillsArr = []

    skillsRef.set({
      sports: {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['sports-1', 'sports-2', 'sports-3'],
        img: 'https://www.krqe.com/wp-content/uploads/sites/12/2020/07/11701ecc4c1b4d9bbaf38f6fe3c8c20c.jpg?w=2560&h=1440&crop=1'
      },
      academic: {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['academic-1', 'academic-2', 'academic-3'],
        img: 'https://www.johncabot.edu/academics/academics%20news%20feed.jpg'
      },
      games: {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['games-1', 'games-2', 'games-3'],
        img: 'https://cdn57.androidauthority.net/wp-content/uploads/2020/04/FortNite-Mobile-video-screenshot-Apps-Weekly.jpg'
      },
      art: {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['art-1', 'art-2', 'art-3'],
        img: 'https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg'
      },
      languages: {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['languages-1', 'languages-2', 'languages-3'],
        img: 'https://freedom7news.com/wp-content/uploads/2018/04/27B94857-47CB-438E-B3B2-E4510E9587BA-900x500.jpeg'
      },
      music: {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['music-1', 'music-2', 'music-3'],
        img: 'https://www.orsymphony.org/globalassets/hero-images/instruments-of-the-orchestra/orchestra-4_pc-leah-nash_1900x600.jpg'
      },
      cooking: {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['cooking-1', 'cooking-2', 'cooking-3'],
        img: 'https://cdn.vox-cdn.com/thumbor/knCecQAgBlRRFZwfKieIykMtaas=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19834556/GettyImages_849177432.jpg'
      },
      lifestyle: {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['lifestyle-1', 'lifestyle-2', 'lifestyle-3'],
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaAFu7WvfIXC-SOXkXu20EALuQcn7e4gtn5w&usqp=CAU'
      }
    });
    
    skillsRef.once('value').then(snapshot => {
      snapshot.forEach(keysSnapshot => {
        var obj = keysSnapshot.val();
        skillsArr.push(obj);
      })
    }).then(() => {
      console.log(skillsArr);
      this.setState({
        skillsArr: skillsArr
      })
    })
  }

  render() {
    const categories = this.state.skillsArr;
    
    return (
      <div className='explore-container'>
        <div className='explore-title-container'>
          <div className="explore-title">Explore</div>
          <div className="explore-subtitle">Explore different skillsharing categories.</div>
        </div>
        <div className='categories-container'>
          {categories.map(category => {
            console.log(category)

            return (
              <CategoryCard name={category.name} desc={category.desc} img={category.img} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Explore