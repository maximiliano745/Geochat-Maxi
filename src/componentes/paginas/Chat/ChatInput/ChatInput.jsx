import {Component} from 'react';
import '../ChatInput/';

class ChatInput extends Component{
    render(){
        return(
            <div className='ChatInmput'>

                <input onKeyDown={this.props.send} placeholder='Escriba Mensaje.Enter Mandar'></input>
                
                      
            </div>
        );
    };
} 

export default ChatInput;
