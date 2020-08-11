import firebase from '../firebase.js';

import CategoryCard from '../app/components/CategoryCard'


export const storeSkills = () => {

    const skillsRef = firebase.database().ref('skills');

    skillsRef.set([
    {
        name: 'Sports',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['sports-1', 'sports-2', 'sports-3']
    },
    { 
        name: 'Academics',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['academic-1', 'academic-2', 'academic-3']
    },
    {
        name: 'Games',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['games-1', 'games-2', 'games-3']
    }, 
    { 
        name: 'Art',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['art-1', 'art-2', 'art-3']
    },
    {
        name: 'Languages',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['languages-1', 'languages-2', 'languages-3']
    },
    {
        name: 'Music',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['music-1', 'music-2', 'music-3']
    },
    {
        name: 'Cooking',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['cooking-1', 'cooking-2', 'cooking-3']
    },
    {
        name: 'Lifestyle',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        subskills: ['lifestyle-1', 'lifestyle-2', 'lifestyle-3']
    }
    ]);

    return skillsRef;
  
};