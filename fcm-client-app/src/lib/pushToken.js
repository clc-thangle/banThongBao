import React, { Component } from 'react';

class pushToken extends Component {

    constructor(props) {
        super(props);

    }
    addData = (item) =>{
        this.props.pushTokenClick(item);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.addData(this.props.getData)}>Click to push token</button>
            </div>
        );
    }
}

export default pushToken;
