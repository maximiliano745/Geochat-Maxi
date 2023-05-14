import React, {Component} from react;
import Headers from './Headers/Headers';
import ChatHistory from './ChatHistory/ChatHistory';
import ChatInput from './ChatInput/ChatInput';
import '../Chat/Chat.css';
import { connect, sendMsg} from './api';

class Chat extends Component{

    constructor(props){
        super(props);
        this.state={
            ChatHistory: []
        }
    }

    ComponentDidMount(){
        connect((msg)=>{
            console.log("Nuevo Mensaje");
            this.setState(prevState => ({
                chatHistory:[...prevState.chatHistory, msg]
            }))
            console.log(this.state);
        });
    }    

    render(){
        return(
            //Orginal esta en App
            <div className='Chat'>
                
                <Headers/>  
                <ChatHistory chatHistory={this.state.chatHistory}/>
                <ChatInput send={this.send}/>

            </div>   
        )
    }
}

export default Chat;
