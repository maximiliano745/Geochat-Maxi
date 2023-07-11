
import { Component } from "react";
import "./Chat/Chat.css";
import { connect, sendMsg } from "./Chat/api";
import Header from './Chat/Headers/Headers';
import ChatHistory from '../paginas/Chat/ChatHistory'
import ChatInput from "./Chat/ChatInput";


class Chat extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }


  send(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="Chat">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
        {/* <button onClick={this.send}>Mandar</button> */}
        {/* <input onClick={this.send} placeholder='Escriba Mensaje'></input> */}
      </div>



    );
  }
}
export default Chat;


