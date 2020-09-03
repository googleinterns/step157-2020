import React, { Component } from 'react';
import axios from 'axios';
import firebase from 'firebase';

import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const { value } = this.state;
    let newval = value + ' ';
    const value_repeated = newval.repeat(100);

    axios.post(
      `https://language.googleapis.com/v1beta2/documents:classifyText`, 
      {
        'document': {
          'content': value_repeated, 
          'type': 'PLAIN_TEXT'
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': 'AIzaSyCpCb34hHbCpnML8a-77Tkj64tdyx64fw8'
        }
      })
      .then(res => {
        const classifiedCats = res.data.categories;

        if (classifiedCats.length > 0) {
          const closestCat = classifiedCats[0].name;
          console.log(closestCat)
          let splitCat = closestCat.split("/");
          console.log(splitCat);
          let topLevelClassified = splitCat[1];
          let mostSpecificClassified = splitCat[splitCat.length - 1];
          console.log(topLevelClassified);
          console.log(mostSpecificClassified);

          const skillsRef = firebase.database().ref('skills');

          let topLevelCat = ''
          const otherCats = [
            'Autos & Vehicles',
            'Business & Industrial',
            'Computers & Electronics',
            'Finance',
            'Internet & Telecom',
            'Law & Government',
            'News',
            'Online Communities',
            'People & Society',
            'Real Estate'
          ]
          const lifestyleCats = [
            'Beauty & Fitness',
            'Health',
            'Home & Garden',
            'Pets & Animals',
            'Shopping',
            'Travel'
          ]
          const eduationCats = [
            'Books & Literature',
            'Jobs & Education',
            'Science'
          ]

          if (topLevelClassified === 'Arts & Entertainment' && splitCat.length > 1) {
            if (splitCat[2] === 'Music & Audio') {
              topLevelCat = 'Music'
            } else {
              topLevelCat = 'Art'
            }
          } else if (otherCats.includes(topLevelClassified)) {
            topLevelCat = 'Other'
          } else if (lifestyleCats.includes(topLevelClassified)) {
            topLevelCat = 'Lifestyle'
          } else if (eduationCats.includes(topLevelClassified)) {
            topLevelCat = 'Education'
          } else if (topLevelClassified === 'Reference' && splitCat.length > 1) {
            if (splitCat[2] === 'Language Resources') {
              topLevelCat = 'Language'
            } else {
              topLevelCat = 'Education'
            }
          } else if (topLevelClassified === 'Food & Drink') {
            topLevelCat = 'Cooking'
          } else if (topLevelClassified === 'Hobbies & Leisure') {
            topLevelCat = 'Hobbies'
          } else {
            topLevelCat = topLevelClassified
          }

          console.log("topLevelCat:", topLevelCat)

          // [
          //   'Arts & Entertainment/Music & Audio', --> Music
          //   'Arts & Entertainment/everything else', --> Art
          //   'Autos & Vehicles', --> Other
          //   'Beauty & Fitness', --> Lifestyle
          //   'Books & Literature', --> Education
          //   'Business & Industrial', --> Other
          //   'Computers & Electronics', --> Other
          //   'Finance', --> Other
          //   'Food & Drink', --> Cooking
          //   'Games', --> Games
          //   'Health', --> Lifestyle
          //   'Hobbies & Leisure', --> Hobbies
          //   'Home & Garden', --> Lifestyle
          //   'Internet & Telecom', --> Other
          //   'Jobs & Education', --> Education
          //   'Law & Government', --> Other
          //   'News', --> Other
          //   'Online Communities', --> Other
          //   'People & Society', --> Other
          //   'Pets & Animals', --> Lifestyle
          //   'Real Estate', --> Other
          //   'Reference/Language Resources', --> Language
          //   'Reference/everything else', --> Education
          //   'Science', --> Education
          //   'Shopping', --> Lifestyle
          //   'Sports', --> Sports
          //   'Travel' --> Lifestyle
          // ]

        } else {
          console.log("Unable to classify.");
        }
      })

    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className='home-container'>
          <div className='home-text-container'>
            <div className='home-title'>The first marketplace exclusively for skills</div>
            <div className='home-subtitle'>Learn, exchange, connect</div>
            <div className='home-btn-container'>
              <a href='/signin' className='home-btn btn-signup'>Sign Up</a>
              <a href='/explore' className='home-btn btn-explore'>Explore</a>
            </div>
          </div>
          <div className="home-img-container">
            <img className='home-img' src='https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg' />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home