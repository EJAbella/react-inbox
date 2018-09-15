import React from 'react';
import Label from "./Label";

class Message extends React.Component {

    labels = this.props.message.labels.map((label, i) => <Label key={i} label={label}/>);

    handleSelect = () => {
        this.props.toggleSelected(this.props.message)
    };

    handleStarred = () => {
        this.props.toggleStarred(this.props.message.id)
    };

    handleRead = (e) => {
        e.preventDefault();
        this.props.toggleRead(this.props.message)
    };

    render() {
        return (
            <div>
                <div className={`row message ${this.props.message.read ? 'read' : 'unread'} ${this.props.message.selected && 'selected'}`}>
                    <div className="col-xs-1">
                        <div className="row">
                            <div className="col-xs-2">
                                <input onClick={this.handleSelect} type="checkbox" readOnly checked={this.props.message.selected}/>
                            </div>
                            <div className="col-xs-2">
                                <i onClick={this.handleStarred}
                                   className={`star fa ${this.props.message.starred ? 'fa-star' : 'fa-star-o'}`}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-11">
                        <a onClick={this.handleRead} href="#">
                            {this.labels}
                            {this.props.message.subject}
                        </a>
                    </div>
                </div>

                {/*Potential state to re-render child component*/}
                <div className="row this.props.message-body" style={{display: 'none'}}>
                    <div className="col-xs-11 col-xs-offset-1">
                        {this.props.message.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default Message