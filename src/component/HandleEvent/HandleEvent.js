import React, { Component } from 'react'

export default class extends Component {
    handleClick = (name) => {
        alert('hello ' + name)
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.handleClick('Long') }}>Click me</button>
            </div>
        )
    }
}
