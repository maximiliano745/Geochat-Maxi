import React, {Component} from react;
import '../ChatHistory.scss';
import Message from '../Message/Message';

class ChatHistory extends Component{
    render(){
        console.log(props.ChatHistory);
        this.props.ChatHistory.map(msg=><Message key={msg.timeStamp} message={msg.data} />);
        
        return(
            <div className='ChatIstory'>
                <h2>Historial del Chat</h2>
                {messages}
            </div>
        );
    };
}

export default ChatHistory;