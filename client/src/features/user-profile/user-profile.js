import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as queryString from 'query-string';
import {useLocation, useHistory, useParams} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import EditableProfile from './editable-profile.js';
import ReadOnlyProfile from './read-only-profile.js';
import './user-profile.css';

/**
 * React component that holds state for the display type of the user profile (editing or reading)
 * @param {object} props The component props
 * @returns {JSX.Element} An HTML div with an edit button and the user profile
 * @example
 * return (<Profile />)
 */
const Profile = (props) => {
  const { id } = props;

  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  const queries = queryString.parse(location.search, {ignoreQueryPrefix: true});

  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const userId = params.id || id;
    if (userId == null) {
      history.push('/signin');
    }
    if (userId === id) {
      setIsOwnProfile(true);
    }
  }, [id, params, history]);

  useEffect(() => {
    setIsEditing(queries.edit === 'true');
  }, [queries.edit]);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        disabled={!isOwnProfile || isEditing}
        onClick={() => { history.push(`${location.pathname}?edit=true`); }}
      >
        Edit
        {' '}
      </Button>
      {isEditing ? <EditableProfile /> : <ReadOnlyProfile /> }
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps)(Profile);
