import React, { useEffect, useState, createRef } from 'react';
import {Link} from 'react-router-dom';
import {useImmer} from 'use-immer';
import Button from '@material-ui/core/Button';
import TextAreaAutosize from '@material-ui/core/TextareaAutosize';
import {fetchChatHistory, sendMessage} from '../../api/chat-api.js';
import './chat.css';

const ChatHistory = (props) => {
  const {
    senderId,
    receiverId,
  } = props;
  const [chatHistory, setChatHistory] = useImmer({});
  const [messageText, setMessageText] = useState('');
  const textFieldRef = createRef();

  useEffect(() => {
    fetchChatHistory(senderId, receiverId, (messages) => {
      if (messages !== null && messages !== undefined) {
        setChatHistory(() => messages);
      }
    });
  }, [senderId, receiverId, setChatHistory]);

  useEffect(() => {
    if (textFieldRef.current !== null) {
      textFieldRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  // a list of text divs, obtained from the messages in the chat history
  // a class name based on the id of the sender
  const messageList = Object.keys(chatHistory).map((messageId) => {
    const message = chatHistory[messageId];
    if (message.senderId === senderId) {
      return (
        <div className="sender message" key={messageId}>
          {message.text}
        </div>
      );
    }

    return (
      <div className="receiver message" key={messageId}>
        {message.text}
      </div>
    );
  });

  /**
  * Adds a message to the chat history in the database and resets
  * the messageTest state
  * @returns {undefined}
  */
  const sendMessageToReceiver = async () => {
    const message = {
      text: messageText,
      senderId,
      timestamp: Date.now(),
    };
    await sendMessage(senderId, receiverId, message);
    setMessageText('');
  };

  /**
  * Shows either the chat history or instructions to click on a user
  * @returns {undefined}
  */
  const showSendButtonOrInstruction = () => {
    if (receiverId === null || receiverId === undefined) {
      return (
        <p>
          Click a user in the left menu to start chattting!
          No conversations to continue? Check explore to find
          somebody new.
        </p>
      );
    } return (
      <div>
        <TextAreaAutosize
          id="text-field"
          ref={textFieldRef}
          rowsMin={8}
          aria-label="user bio"
          value={messageText}
          onChange={(event) => { setMessageText(event.target.value); }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={sendMessageToReceiver}
        >
          Send
        </Button>
      </div>
    );
  };

  return (
    <div id="messages">
      {receiverId !== undefined ? (
        <Link id="profile-link" to={`/profile/${receiverId}`}>See their profile</Link>
      ) : null}
      {messageList}
      {showSendButtonOrInstruction()}
    </div>
  );
};

export default ChatHistory;
