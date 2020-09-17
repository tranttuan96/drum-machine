import React, { Component } from 'react'
import './drumMachine.scss'
import DrumPad from './DrumPad'

export default class DrumMachine extends Component {

    drumPadArr = [
        { keyCode: 'Q', name: 'Heater-1', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        { keyCode: 'W', name: 'Heater-2', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        { keyCode: 'E', name: 'Heater-3', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        { keyCode: 'A', name: 'Heater-4', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        { keyCode: 'S', name: 'Clap', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        { keyCode: 'D', name: 'Open-HH', link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        { keyCode: 'Z', name: 'Kick-n\'-Hat', link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { keyCode: 'X', name: 'Kick', link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        { keyCode: 'C', name: 'Closed-HH', link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
    ]

    state = {
        name: '',
    }

    handlePressPad = (keyCode, name) => {
        let sound = document.getElementById(keyCode)
        sound.play();
        this.setState({
            name: name,
        })
    }

    handleKeyPress = (event) => {
        let index = this.drumPadArr.findIndex(pad => pad.keyCode === event.key.toUpperCase())
        if (index !== -1) {
            this.handlePressPad(this.drumPadArr[index].keyCode, this.drumPadArr[index].name)
        }
    }


    render() {
        return (
            <div id="drum-machine">
                <div className="display-wrapper">
                    <div id="display">
                        {this.state.name}
                    </div>
                </div>
                <div className="pad-group">
                    {this.drumPadArr.map((pad, index) => {
                        return <DrumPad key={index} keyCode={pad.keyCode} name={pad.name} link={pad.link} handlePressPad={this.handlePressPad} />
                    })}
                </div>
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
