import firebase from 'firebase';
import axios from 'axios';

const categorizeDB = (enteredSkill, topLevelCat) => {
  const categorizeSkill = firebase.database().ref(`skills2/${topLevelCat}/subskills`);

  categorizeSkill.child(enteredSkill).set({desc: 'skill description'});
};

const classify = (enteredSkill) => {
  const newval = `${enteredSkill} `;
  const valueRepeated = newval.repeat(100);

  axios.post(
    'https://language.googleapis.com/v1beta2/documents:classifyText',
    {
      document: {
        content: valueRepeated,
        type: 'PLAIN_TEXT',
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': 'AIzaSyCpCb34hHbCpnML8a-77Tkj64tdyx64fw8',
      },
    },
  )
    .then((res) => {
      const classifiedCats = res.data.categories;

      if (classifiedCats.length > 0) {
        const closestCat = classifiedCats[0].name;
        console.log(closestCat);
        const splitCat = closestCat.split('/');
        console.log(splitCat);
        const topLevelClassified = splitCat[1];
        const mostSpecificClassified = splitCat[splitCat.length - 1];
        console.log(topLevelClassified);
        console.log(mostSpecificClassified);

        let topLevelCat = '';
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
          'Real Estate',
        ];
        const lifestyleCats = [
          'Beauty & Fitness',
          'Health',
          'Home & Garden',
          'Pets & Animals',
          'Shopping',
          'Travel',
        ];
        const eduationCats = [
          'Books & Literature',
          'Jobs & Education',
          'Science',
        ];

        if (topLevelClassified === 'Arts & Entertainment' && splitCat.length > 1) {
          if (splitCat[2] === 'Music & Audio') {
            topLevelCat = 'Music';
          } else {
            topLevelCat = 'Art';
          }
        } else if (otherCats.includes(topLevelClassified)) {
          topLevelCat = 'Other';
        } else if (lifestyleCats.includes(topLevelClassified)) {
          topLevelCat = 'Lifestyle';
        } else if (eduationCats.includes(topLevelClassified)) {
          topLevelCat = 'Education';
        } else if (topLevelClassified === 'Reference' && splitCat.length > 1) {
          if (splitCat[2] === 'Language Resources') {
            topLevelCat = 'Languages';
          } else {
            topLevelCat = 'Education';
          }
        } else if (topLevelClassified === 'Food & Drink') {
          topLevelCat = 'Cooking';
        } else if (topLevelClassified === 'Hobbies & Leisure') {
          topLevelCat = 'Hobbies';
        } else {
          topLevelCat = topLevelClassified;
        }

        console.log('topLevelCat:', topLevelCat);

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

        categorizeDB(enteredSkill, topLevelCat);
      } else {
        console.log('Unable to classify.');
      }
    });
};

export default classify;
