import React, { Component } from 'react'
import './BaiTapChonXeNangCao.css'
//import mảng dữ liệu các model xe
import dataFeatues from '../Data/arrayFeatures.json'
import dataWheels from '../Data/wheels.json'

export default class BaiTapChonXeNangCao extends Component {
    renderIcon = () => {
        return dataFeatues.map((item, index) => {
            return (
                <div className="row mt-1 border border-light" key={index}>
                    <div className="col-2">
                        <img src={item.img} alt={index} style={{ width: '100%' }} className='p-3' />
                    </div>
                    <div className="col-10 text-dark">
                        <h5 className='py-3'>{item.title}</h5>
                        <p className='p-3 pt-0'>{item.type}</p>
                    </div>
                </div>
            )
        })
    }

    renderWheel = () => {
        return dataWheels.map((item, index) => {
            return (
                <div className="row mt-1 border border-light" key={index}>
                    <div className="col-2">
                        <img src={item.img} alt={index} style={{ width: '100%' }} className='p-3' />
                    </div>
                    <div className="col-10 text-dark">
                        <h5 className='py-3'>{item.title}</h5>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-6">
                        <div className="model">
                            <img style={{ width: '100%' }} src="./images/images-black/images-black-1/civic-1.jpg" alt="" />
                        </div>

                        <div className="card text-white bg-primary">
                            <h5 className="card-header">
                                Exterior Color
                            </h5>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Color</th>
                                        <th>Black</th>

                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <th>$ 1,000</th>

                                    </tr>
                                    <tr>
                                        <th>Engine Type</th>
                                        <th>In-line-4-cylinder</th>

                                    </tr>
                                </thead>
                            </table>
                        </div>

                    </div>
                    <div className="col-6">
                        <div className="card text-white bg-light">
                            <h5 className='card-header text-dark'>Exterior color</h5>
                            <div className="container-fluid">
                                {this.renderIcon()}
                            </div>
                            <div className="card text-left">
                                <h5 className='card-header text-dark'>Wheels</h5>
                                <div className="container-fluid">
                                    {this.renderWheel()}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}
