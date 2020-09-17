import React, { Component } from 'react'
import './drumPad.scss'

export default class Drumpad extends Component {

    state = {
        isTrigged : false,
    }

    render() {
        return (
            <div className="drum-pad" id={this.props.name} onClick={() => this.props.handlePressPad(this.props.keyCode, this.props.name)}>
                <audio className="clip" id={this.props.keyCode} src={this.props.link}></audio>{this.props.keyCode}
            </div>
        )
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    // componentWillUnmount() {
    //     document.removeEventListener("keydown", this.handleKeyPress);
    // }
}
