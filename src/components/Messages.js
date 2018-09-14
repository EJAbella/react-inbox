import React from 'react';
import Message from "./Message";

const Messages = ({messages, toggleStarred, toggleSelected, toggleRead}) => {

    let allMessages = messages.map(message =>
        <Message
            key={message.id}
            message={message}
            toggleStarred={toggleStarred}
            toggleSelected={toggleSelected}
            toggleRead={toggleRead}
        />)

    return (
        <div>{allMessages}</div>
    )
}

export default Messages