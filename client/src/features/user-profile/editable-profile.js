import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextAreaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import {fetchUserProfileById, updateUserProfile, updateProfileState} from './user-profile-slice.js';
import {uploadProfilePicture} from '../../api/user-api.js';
import classify from './classify.js';

/**
 * React omponent displayed when the user profile is being edited
 * @param {object} props The component props
 * @returns {JSX.Element} An HTML form with profile fields
 * @example
 * return (<EditableProfile />)
 */
const EditableProfile = (props) => {
  const {
    userProfile,
    id,
    fetchUserFromServer,
    updateUserInState,
    updateUserInServer,
  } = props;

  const history = useHistory();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [enteredSkill, setEnteredSkill] =  useState('');

  /* Fetches user data on page load */
  useEffect(() => {
    fetchUserFromServer(id);
  }, [id, fetchUserFromServer]);

  /**
  * Updates the image preview url and the profile photo
  * @param {React.FormEvent<EventTarget>} event The button click event to save the profile
  * @returns {undefined}
  */
  const onImageUpload = (event) => {
    const reader = new FileReader();
    const uploadedFile = event.target.files[0];

    reader.onloadend = () => {
      updateUserInState({key: 'photoUrl', value: reader.result});
    };

    if (uploadedFile) {
      reader.readAsDataURL(uploadedFile);
      updateUserInState({key: 'photoUrl', value: reader.result});
      setProfilePhoto(uploadedFile);
    }
  };

  /**
  * Updates the user's data in the database
  * @returns {undefined}
  */
  const handleProfileSave = async () => {
    let downloadUrl;
    if (profilePhoto) {
      downloadUrl = await uploadProfilePicture(id, profilePhoto);
    }
    const photoUrl = downloadUrl || userProfile.photoUrl;
    await updateUserInServer({
      id,
      data: {
        ...userProfile, ...{photoUrl},
      },
    });

    const splitEntered = enteredSkill.split(',').map((skill) => skill.trim());

    for (let i = 0; i < splitEntered.length; i += 1) {
      console.log(splitEntered[i]);
      classify(splitEntered[i]);
    }

    await updateUserInServer({
      id,
      data: {
        skillsToTeach: splitEntered,
      },
    });

    history.push('/profile');
  };

  return (
    <div className="profile">
      <form id="profile-form">
        <Avatar
          className="user-photo"
          alt="uploaded image preview"
          src={userProfile.photoUrl}
          style={{width: '200px', height: '200px'}}
        />
        <label
          className="user-photo"
          htmlFor="image-upload"
        >
          <Button
            variant="outlined"
            color="primary"
            component="span"
          >
            Upload Profile Picture

          </Button>
          <input id="image-upload" onChange={onImageUpload} type="file" name="profile picture" />
        </label>
        <TextField
          label="Name"
          variant="outlined"
          value={userProfile.name}
          onChange={(event) => { updateUserInState({key: 'name', value: event.target.value}); }}
        />
        <TextField
          label="Age"
          variant="outlined"
          value={userProfile.age}
          onChange={(event) => { updateUserInState({key: 'age', value: event.target.value}); }}
        />
        <TextAreaAutosize
          rowsMin={10}
          aria-label="user bio"
          style={{width: '500px'}}
          value={userProfile.bio}
          onChange={(event) => { updateUserInState({key: 'bio', value: event.target.value}); }}
        />
        <TextAreaAutosize
          rowsMin={10}
          aria-label="skills to teach"
          style={{width: '500px'}}
          value={enteredSkill}
          onChange={(e) => setEnteredSkill(e.target.value)}
        />
        <div id="actions">
          <Button
            className="form-action"
            variant="contained"
            color="secondary"
            onClick={history.goBack}
          >
            Cancel
          </Button>
          <Button
            className="form-action"
            variant="contained"
            color="primary"
            onClick={handleProfileSave}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.user.id,
  userProfile: state.user.userProfile,
});

export default connect(mapStateToProps,
  {
    fetchUserFromServer: fetchUserProfileById,
    updateUserInServer: updateUserProfile,
    updateUserInState: updateProfileState,
  })(EditableProfile);
