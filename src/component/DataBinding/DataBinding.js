import React, { Component } from 'react'
import DataBindingRFC from './DataBindingRFC';
import HeaderDemo from '../BaiTapChiaLayOut/HeaderDemo';

export default class DataBinding extends Component {
    //tạo 1 thuộc tính
    name = 'Cao Thành Long';

    //Thuộc tính object student
    student = {
        name: 'Long',
        age: 20
    }

    //Binding phương thức (hàm của lớp đối tượng)
    //Tất cả hàm render đều phải trả về component (jsx)
    renderImg = () => {
        return (
            <img src="https://via.placeholder.com/150" alt="Placeholder" />

        )
    }
    rederMutiComponent = () => {
        return (
            <HeaderDemo />
        )
    }
    rederInfoVirus = () => {
        const virus = {
            id: 'covid-19',
            name: 'corona',
            img: 'https://via.placeholder.com/150',
            alias: 'SARS-CoV-2'
        }
        return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src={virus.img} alt={virus.id} />
                <div className="card-body">
                    <h4 className="card-title">{virus.name}</h4>
                    <p className="card-text">{virus.alias}</p>
                </div>
            </div>

        )
    }
    render() {
        //Biến của hàm render => không sử dùng được cho hàm khác
        const school = 'CyberSoft';
        const student1 = {
            name: 'Long',
            age: 20
        }
        const rederInfoVirus = () => {
            const virus = {
                id: 'covid-19',
                name: 'corona',
                img: 'https://via.placeholder.com/150',
                alias: 'SARS-CoV-2'
            }
            return (
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={virus.img} alt={virus.id} />
                    <div className="card-body">
                        <h4 className="card-title">{virus.name}</h4>
                        <p className="card-text">{virus.alias}</p>
                    </div>
                </div>

            )
        }

        return (
            <div>
                <h1>Data Binding RCC</h1>
                <h1>{this.name} - school: {school}</h1>
                <hr />
                <h1>Binding object</h1>
                <h1 id="title">name: {this.student.name} - age: {this.student.age}</h1>
                <h1 id="title">name: {student1.name} - age: {student1.age}</h1>
                <hr />
                <h3>Binding Fuction</h3>
                {this.renderImg()}
                {this.rederMutiComponent()}
                {this.rederInfoVirus()}
                {rederInfoVirus()}
                <hr />
                <DataBindingRFC />
            </div>
        )
    }
}
