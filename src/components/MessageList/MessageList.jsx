import uuid from 'react-uuid';
import PropTypes from 'prop-types';

export function MessageList({ messages }) {

  return (
    <>
      <h1>MessageList</h1>
      <ul>
        {messages.map((item) => (
          <li key={uuid()}>{item.text}</li>
        ))}
      </ul>
    </>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}