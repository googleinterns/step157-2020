import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import uuid from 'react-uuid';
import Card from '@material-ui/core/Card';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import {fetchUserProfileById} from './user-profile-slice.js';

const ReadOnlyProfile = (props) => {
  const {userProfile, id} = props;

  const params = useParams();

  useEffect(() => {
    const userId = params.id || id;
    props.fetchUserProfileById(userId);
  }, [props, params.id, id]);

  const renderSkillsToTeach = userProfile.skillsToTeach.map((skill) => (
    <div key={uuid()} id="skills-to-teach">
      <LibraryBooksIcon />
      <p>{skill}</p>
    </div>
  ));

  const renderSkillsToLearn = userProfile.skillsToLearn.map((skill) => (
    <div key={uuid()} id="skills-to-learn">
      <WbIncandescentIcon />
      <p>{skill}</p>
    </div>
  ));

  return (
    <div key={uuid()} id="user-profile">
      <Avatar
        className="user-photo"
        alt="uploaded image preview"
        src={userProfile.photoUrl}
        style={{width: '200px', height: '200px'}}
      />
      <p id="name-and-age">
        {userProfile.name}
        ,
        {' '}
        {userProfile.age}
      </p>
      <p id="user-bio">
        {userProfile.bio}
      </p>
      <div id="user-skills">
        <Card>
          <p>Teaching</p>
          {renderSkillsToTeach}
        </Card>
        <Card>
          <p>Learning</p>
          {renderSkillsToLearn}
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.user.id,
  userProfile: state.user.userProfile,
});

export default connect(mapStateToProps, {fetchUserProfileById})(ReadOnlyProfile);
