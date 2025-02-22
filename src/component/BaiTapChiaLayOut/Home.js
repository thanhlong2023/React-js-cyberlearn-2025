import React, { Component } from 'react'
import HeaderDemo from './HeaderDemo'
import Navigation from './Navigation'
import ContentComponent from './ContentComponent'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        let style = {
            padding: '0'
        }
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12" style={style}>
                        <HeaderDemo />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4" style={style}>
                        <Navigation />
                    </div>
                    <div className="col-8" style={style}>
                        <ContentComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={style}>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
