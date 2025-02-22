import React, { Component } from 'react'

export default class StateDemo extends Component {

    // state là thuộc tính có sẵn của react class component giúp người dùng định nghĩa những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện 
    state = {
        status: false
    }
    //setState là phương thức có sẵn của react class component giúp người dùng thay đổi giá trị của state và render lại giao diện

    userLogin = {
        name: 'Long',
        age: 20
    }

    login = () => {
        // this.status = true; //không được gán giá trị trực tiếp cho state mà phải thông qua phương thức setState
        let newState = {
            status: true
        }
        //gọi phương thức setState => truyền vào state mới\
        //setState là phương thức bất đồng bộ
        this.setState(newState, () => { console.log(this.state) });
        // console.log(this.state);

    }

    renderUserLogin = () => {
        if (this.state.status) {
            return (
                <div className="text-center">{this.userLogin.name}</div>
            )
        }
        return <button onClick={() => { this.login() }}>Đăng nhập</button>
    }
    render() {
        return (
            <div>{this.renderUserLogin()}</div>
        )
    }
}
