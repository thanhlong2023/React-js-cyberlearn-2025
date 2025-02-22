import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgProduct: require('../assets/products/black-car.jpg')
    }

    rederCar = (imgNewProduct) => {
        // let newState = {
        //     imgProduct: (imgNewProduct)
        // }
        this.setState({
            imgProduct: imgNewProduct
        });
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-7">
                        <img style={{ width: '100%' }} src={this.state.imgProduct} alt="black-car" />
                    </div>
                    <div className="col-5">
                        <div className="card text-dark">
                            <div className="card-header text-primary">Exterior Color</div>
                            <div className="card-body">
                                <div className="row border border-light pt-2 pb-2" onClick={() => { this.rederCar(require('../assets/products/black-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-black.jpg')} alt="black-icon" />
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border border-light pt-2 pb-2" onClick={() => { this.rederCar(require('../assets/products/red-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-red.jpg')} alt="red-icon" />
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border border-light pt-2 pb-2" onClick={() => { this.rederCar(require('../assets/products/silver-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-silver.jpg')} alt="silver-icon" />
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border border-light pt-2 pb-2" onClick={() => { this.rederCar(require('../assets/products/steel-car.jpg')) }} style={{ cursor: 'pointer' }}>
                                    <img className='col-2' src={require('../assets/icons/icon-steel.jpg')} alt="steel-icon" />
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
