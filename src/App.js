import { useState, useEffect } from 'react';

import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form';
import { AUTHOR } from './constants';

import './App.css'

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    console.log('newMessage', newMessage);
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          text: 'Im BOT'
        })
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])

  return (
    <>
      <div className='center'>
        <h1>Welcome to chat!</h1>
        <Form addMessage={addMessage} />
        <MessageList messages={messages} />
      </div>
    </>
  );
}

export default App;
