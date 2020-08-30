import React, {Component} from 'react';

import './team.css';

// eslint-disable-next-line react/prefer-stateless-function
class Team extends Component {
  render() {
    return (
      <div className="team-container">
        <div className="team-text-container"> Meet the Team! </div>
        <hr />
        <div className="teammates-container">
          <div className="teammate-container">
            <div className="user-name"> Anthony </div>
            <div className="user-bio">
              I&apos;m Anthony and I&apos;m a rising junior at UCLA majoring in computer science.
              I&apos;m from San Leandro, CA, in the Bay Area. I like to run, eat, and hang out
              with my friends. My favorite artists are J. Cole and Kendrick Lamar.
              I don&apos;t keep up with baseball or football, but my favorite teams are the Mets
              and the Colts. If I could live anywhere, I would live in Hawaii.
            </div>
          </div>
          <div className="teammate-container">
            <div className="user-name"> Chibuzo </div>
            <div className="user-bio">
              I&apos;m Chibuzo, and I&apos;m from Nigeria. I&apos;m a sophomore at Dartmouth
              majoring in CS with a possible minor in French (I was in Lyon before the
              pandemic and I&apos;m looking forward to returning to France someday).
              I&apos;m still exploring what areas
              of CS I like, but I just finished a full stack web dev class that I have
              absolutely loved, so I&apos;m excited about building some cool web apps.
              In my free time I like to write and listen to audiobooks
              (I write regular books, not audiobooks :), not that I&apos;ve ever
              finished a book). I&apos;m also in the archery club on campus and I
              play chess sometimes.
            </div>
          </div>
          <div className="teammate-container">
            <div className="user-name"> Chloe </div>
            <div className="user-bio">
              Hi! My name is Chloe and I&apos;m a rising junior at UC Santa Cruz majoring in CS.
              I am currently working from home in Palo Alto, California. My hobbies include reading,
              playing piano,and hanging out with friends and family. I speak French fluently and
              I love traveling. My CS interests are wide ranging and I have loved this experience
              diving into web app development.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
