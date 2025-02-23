import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'
import style from './BaiTapThuKinh.module.css'

export default class BaiTapThuKinh extends Component {
    state = {
        glassesCurrent: {
            id: 2,
            price: 30,
            name: 'GUCCI G8850U',
            url: './glassesImage/v2.png',
            desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }
    }
    renderGlassesList = () => {
        return dataGlasses.map((glassesItem, index) => {
            return (
                <img onClick={() => { this.changeGlasses(glassesItem) }} className="ml-2 p-2 border border-width-1" style={{ width: '110px', cursor: 'pointer' }} key={index} src={glassesItem.url} alt="" />
            )
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent: newGlasses
        })
    }
    render() {
        const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
            from {
                width: 0;
                transform: rotate(45deg);
                opacity:0;
            }
            to {
                width:150px;
                opacity:0.7;
                transform: rotate(0deg);

            }
        }`;
        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: '0.7',
            transform: 'rotate(0deg)',
            animation: `animChangeGlasses${Date.now()} 2s`
        }

        const infoGlasses = {
            width: '250px',
            top: '200px',
            left: '270px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255,127,0,.5)',
            textAlign: 'left',
            height: '105px'
        }
        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '2000px', minHeight: '2000px' }}>
                <style>
                    {keyFrame}
                </style>

                <div className='container'>
                    <h3 className='text-center p-5'>Try glasses app online</h3>
                    <div className='container'>
                        <div className="row text-center">
                            <div className="col-6">
                                <div className="position-relative">
                                    <img src="./glassesImage/model.jpg" alt="" className='position-absolute' style={{ width: '250px' }} />
                                    <img style={styleGlasses} className="position-absolute glassesStyle" src={this.state.glassesCurrent.url} />
                                    <div style={infoGlasses} className="position-relative ">
                                        <span style={{ color: '#AB82FF', fontSize: '17px' }} className="font-weight-bold">{this.state.glassesCurrent.name}</span> <br />
                                        <span style={{ fontSize: '14px', paddingRight: '5px', fontWeight: '400' }}>{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6"> <img src="./glassesImage/model.jpg" alt="" className='position-absolute' style={{ width: '250px' }} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`bg-light container text-center mt-5 d-flex justify-content-center p-5 ${style.paddingTop}`}>
                    {this.renderGlassesList()}
                </div>
            </div>

        )
    }
}
