import React, {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { setAutoFreeze } from 'immer';
import {useImmer} from 'use-immer';
import {useHistory} from 'react-router-dom';
import MaterialTable from 'material-table';
import {subscribeToConversationList} from '../../api/chat-api.js';
import {fetchUser} from '../../api/user-api.js';

setAutoFreeze(false);

const Conversations = (props) => {
  const {
    id,
  } = props;

  const [userData, setUserData] = useImmer([]);
  const history = useHistory();

  useEffect(() => {
    // Fetches all other users the current user has open conversations with
    subscribeToConversationList(id, (users) => {
      if (users !== null || undefined) {
        Object.keys(users).forEach(async (key) => {
          const userId = users[`${key}`];
          const user = await fetchUser(userId);
          setUserData((draft) => {
            draft.push({
              profilePicture: <Avatar
                className="user-photo"
                alt="uploaded image preview"
                src={user.photoUrl}
                style={{width: '40px', height: '40px'}}
              />,
              name: user.name,
              id: userId,
            });
          });
        });
      }
    });
  }, [id, setUserData]);

  const columns = [
    {title: '', field: 'profilePicture'},
    {title: '', field: 'name'},
  ];

  return (
    <div id="conversations-table">
      <MaterialTable
        title="Conversations"
        columns={columns}
        data={userData}
        options={{
          search: true,
          pageSize: 50,
          pageSizeOptions: [5, 10, 20, 50, 100],
        }}
        onRowClick={(_, rowData) => { history.push(`/chat/${rowData.id}`); }}
      />
    </div>
  );
};

export default Conversations;
