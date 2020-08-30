import firebase from '../firebase.js';

const storeSkills = () => {
  const skillsRef = firebase.database().ref('skills');

  skillsRef.set([
    {
      name: 'Sports',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
      subskills: [
        {
          name: 'sports-1',
          desc: 'This is a subskill description',
        },
        {
          name: 'sports-2',
          desc: 'This is a subskill description',
        },
        {
          name: 'sports-3',
          desc: 'This is a subskill description',
        },
      ],
    },
    {
      name: 'Education',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
      subskills: [
        {
          name: 'education-1',
          desc: 'This is a subskill description',
        },
        {
          name: 'education-2',
          desc: 'This is a subskill description',
        },
        {
          name: 'education-3',
          desc: 'This is a subskill description',
        },
      ],
    },
    {
      name: 'Games',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
      subskills: [
        {
          name: 'games-1',
          desc: 'This is a subskill description',
        },
        {
          name: 'games-2',
          desc: 'This is a subskill description',
        },
        {
          name: 'games-3',
          desc: 'This is a subskill description',
        },
      ],
    },
    {
      name: 'Art',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
      subskills: [
        {
          name: 'art-1',
          desc: 'This is a subskill description',
        },
        {
          name: 'art-2',
          desc: 'This is a subskill description',
        },
        {
          name: 'art-3',
          desc: 'This is a subskill description',
        },
      ],
    },
    {
      name: 'Languages',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
      subskills: [
        {
          name: 'languages-1',
          desc: 'This is a subskill description',
        },
        {
          name: 'languages-2',
          desc: 'This is a subskill description',
        },
        {
          name: 'languages-3',
          desc: 'This is a subskill description',
        },
      ],
    },
    {
      name: 'Music',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
      subskills: [
        {
          name: 'music-1',
          desc: 'This is a subskill description',
        },
        {
          name: 'music-2',
          desc: 'This is a subskill description',
        },
        {
          name: 'music-3',
          desc: 'This is a subskill description',
        },
      ],
    },
    {
      name: 'Cooking',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
      subskills: [
        {
          name: 'cooking-1',
          desc: 'This is a subskill description',
        },
        {
          name: 'cooking-2',
          desc: 'This is a subskill description',
        },
        {
          name: 'cooking-3',
          desc: 'This is a subskill description',
        },
      ],
    },
    {
      name: 'Lifestyle',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
      subskills: [
        {
          name: 'lifestyle-1',
          desc: 'This is a subskill description',
        },
        {
          name: 'lifestyle-2',
          desc: 'This is a subskill description',
        },
        {
          name: 'lifestyle-3',
          desc: 'This is a subskill description',
        },
      ],
    },
  ]);

  return skillsRef;
};

export default storeSkills;
