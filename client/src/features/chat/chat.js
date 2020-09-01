import React from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import Conversations from './conversations.js';
import ChatHistory from './chat-history.js';
import './chat.css';

const Chat = (props) => {
  const {
    id,
  } = props;
  const params = useParams();
  const receiverId = params.id;

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Conversations id={id} />
      <ChatHistory senderId={id} receiverId={receiverId} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps)(Chat);
