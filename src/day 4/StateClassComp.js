import React, { Component } from 'react'

export default class StateClassComp extends Component {
    state = {
        color: "Yellow"
    }
    handleChange = () => {
        this.setState({ color: "Red" })
    }
    render() {
        return (
            <div>
                <h1>The color selected is {this.state.color}</h1>
                <button onClick={this.handleChange}>click me</button>
            </div>
        )
    }
}
