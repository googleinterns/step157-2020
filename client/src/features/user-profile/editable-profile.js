import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextAreaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import {fetchUserProfileById, updateUserProfile} from './user-profile-slice.js';
import {uploadProfilePicture} from '../../api/user-api.js';

const EditableProfile = (props) => {
  const {userProfile, id} = props;

  const history = useHistory();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    props.fetchUserProfileById(id).then(() => {
      setName(userProfile.name);
      setAge(userProfile.age);
      setBio(userProfile.bio);
      setPreview(userProfile.photoUrl);
    });
  });

  const onImageUpload = (event) => {
    const reader = new FileReader();
    const uploadedFile = event.target.files[0];

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (uploadedFile) {
      reader.readAsDataURL(uploadedFile);
      setPreview(reader.result);
      setFile(uploadedFile);
    }
  };

  const handleProfileSave = async () => {
    let downloadUrl;
    if (file) {
      downloadUrl = await uploadProfilePicture(id, file);
    }
    const photoUrl = downloadUrl || preview;
    await props.updateUserProfile({
      id,
      data: {
        name, age, bio, photoUrl,
      },
    });
    history.push('/profile');
  };

  return (
    <form id="profile-form">
      <Avatar
        className="user-photo"
        alt="uploaded image preview"
        src={preview}
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
        value={name}
        onChange={(event) => { setName(event.target.value); }}
      />
      <TextField
        label="Age"
        variant="outlined"
        value={age}
        onChange={(event) => { setAge(event.target.value); }}
      />
      <TextAreaAutosize
        rowsMin={10}
        aria-label="user bio"
        style={{width: '500px'}}
        value={bio}
        onChange={(event) => { setBio(event.target.value); }}
      />
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
    </form>
  );
};

const mapStateToProps = (state) => ({
  id: state.user.id,
  userProfile: state.user.userProfile,
});

export default connect(mapStateToProps, {fetchUserProfileById, updateUserProfile})(EditableProfile);
