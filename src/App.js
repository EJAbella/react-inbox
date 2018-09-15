import React, { Component } from 'react';
import Messages from "./components/Messages";
import Toolbar from "./components/Toolbar";
import ComposeMessage from "./components/ComposeMessage";
import axios from 'axios';

class App extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8082/api/messages`)
            .then(res => {
                this.setState({
                    messages: res.data
                })
            })
    }

    toggleSelected = selectedMessage => {
        let otherMessages = this.state.messages.filter(message => message.id !== selectedMessage.id)
        let updatedMessage = {
            ...selectedMessage,
            selected: !selectedMessage.selected
        }
        this.setState({
            messages: [...otherMessages, updatedMessage].sort((a, b) => a.id - b.id)
        })
    }

    toggleStarred = id => {
        axios.patch(`http://localhost:8082/api/messages/`, {
            messageIds: [id],
            command: 'star'
        })
            .then(res => {
                this.setState({messages:res.data})
            })
    }

    toggleRead = message => {
        axios.patch(`http://localhost:8082/api/messages/`, {
            messageIds: [message.id],
            command: 'read',
            read: !message.read
        })
            .then(res => {
                this.setState({messages:res.data})
            })
    }

    toggleMultiRead = () => {
        let selectedMessages = this.state.messages.filter(message => message.selected)
        axios.patch(`http://localhost:8082/api/messages/`, {
            messageIds: selectedMessages.map(message => message.id),
            command: 'read',
            read: true
        })
            .then(res => {
                this.setState({messages:res.data})
            })
    }

    toggleMultiUnread = () => {
        let selectedMessages = this.state.messages.filter(message => message.selected)
        console.log(selectedMessages)
        axios.patch(`http://localhost:8082/api/messages/`, {
            messageIds: selectedMessages.map(message => message.id),
            command: 'read',
            read: false
        })
            .then(res => {
                this.setState({messages:res.data})
            })
    }

    render() {
        return (
            <div className="container">
                <Toolbar
                    messages={this.state.messages}
                    toggleMultiRead={this.toggleMultiRead}
                    toggleMultiUnread={this.toggleMultiUnread}
                />
                <ComposeMessage/>
                <Messages
                    messages={this.state.messages}
                    toggleStarred={this.toggleStarred}
                    toggleSelected={this.toggleSelected}
                    toggleRead={this.toggleRead}
                />
            </div>
        );
    }
}

export default App;
