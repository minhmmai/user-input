import React, { Component } from 'react';
import './User.css';

class Input extends Component {
    render() {
        return (
            <div className='input'>
                <label>Enter text below</label><br/>
                <input type='text' onChange={this.props.changed}></input>
            </div>
        )
    }
}

export default Input;