import React, { Component } from 'react'

export default class RenderWithLoop extends Component {
    productList = [
        { id: 1, name: 'black car', price: 1000, img: './carbasic/products/black-car.jpg' },
        { id: 2, name: 'red car', price: 2000, img: './carbasic/products/red-car.jpg' },
        { id: 3, name: 'silver car', price: 3000, img: './carbasic/products/silver-car.jpg' },
        { id: 4, name: 'steel car', price: 4000, img: './carbasic/products/steel-car.jpg' }
    ]
    // Cách 1: Render array object sử dụng for
    renderTable = () => {
        let mangTrCpmponet = [];
        for (let index = 0; index < this.productList.length; index++) {
            let product = this.productList[index];
            let trJSX = (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><img src={product.img} alt={product.name} style={{ width: '100px' }} /></td>
                    <td><button className='btn btn-success'>Detail</button></td>
                </tr>
            )
            mangTrCpmponet.push(trJSX);
        }
        return mangTrCpmponet;
    }
    // Cách 2: Render array object sử dụng map
    renderTable2 = () => {
        // let mangTrComponent = this.productList.map((product, index) => {
        //     return (
        //         <tr key={index}>
        //             <td>{product.id}</td>
        //             <td>{product.name}</td>
        //             <td>{product.price}</td>
        //             <td><img src={product.img} alt={product.name} style={{ width: '100px' }} /></td>
        //             <td><button className='btn btn-success'>Detail</button></td>
        //         </tr>
        //     )
        // })
        // return mangTrComponent;

        return this.productList.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><img src={product.img} alt={product.name} style={{ width: '100px' }} /></td>
                    <td><button className='btn btn-success'>Detail</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.renderTable()} */}
                        {this.renderTable2()}
                    </tbody>
                </table>
            </div>
        )
    }
}
