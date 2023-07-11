import { Component } from "react";
import '../Message/';

class Message extends Component {
    constructor(props) {
        super(props);
        let temp = (this.props.message);
        this.state = {
            message: temp
        }
    }

    render() {
        return <div className="Message">{this.state.message}</div>;
    }


}
export default Message;