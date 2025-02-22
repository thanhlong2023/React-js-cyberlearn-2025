import React, { Component } from 'react'

export default class ReaderingConditions extends Component {
    login = true;
    userName = 'Long';

    renderContent = () => {
        if (this.login) {
            return <p>Hello {this.userName}</p>
        } else {
            return <button>Login</button>
        }
    }
    render() {
        return (
            <div>
                {/* {this.login ? <p>Hello {this.userName}</p> : <button>Login</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
