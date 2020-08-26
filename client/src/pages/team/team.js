import React, {Component} from 'react';

import './team.css';


class Team extends Component {
  render() {
    return (
      <div className="team-container">
        <div className="team-text-container"> Meet the Team! </div>
        <hr />
        <div className="teammates-container">
          <div className="teammate-container">
          <div className="user-name"> Anthony </div>
          <div className="user-bio"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
          </div>
          <div className="teammate-container">
          <div className="user-name"> Chibuzo </div>
          <div className="user-bio"> hLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.i </div>
          </div>
          <div className="teammate-container">
          <div className="user-name"> Chloe </div>
          <div className="user-bio"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
          </div>
        </div>
      </div>
    )
  }
};
// const Team = () => (
//     <div className="team-container">
//       <div className="team-text-container">
//         <div className="team-title"> Meet the team! </div>
//         {/* add navlink to our user profiles?? */}
//       </div>
//       <div className="teammate-container">
//         <div className="user-name"> Anthony </div>
//         <div className="user-bio"> hi </div>
//       </div>
//       <div className="teammate-container">
//         <div className="user-name"> Chibuzo </div>
//         <div className="user-bio"> hi </div>
//       </div>
//     </div>
//   );

export default Team;
