import { Component } from 'react';
import '../ChatHistory/';

class ChatHistory extends Component {
    render() {

        const messages = this.props.chatHistory.map((msg, index) => (
            <p key={index}>{msg.data}</p>
        ));

        return (
            <div className='ChatHistory'>
                <h2>Historial del Chat</h2>
                {messages}
            </div>
        );
    };
}

export default ChatHistory;