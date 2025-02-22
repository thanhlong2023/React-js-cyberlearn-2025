import React, { Component } from 'react'
import './Styling.css'// sẽ ảnh hưởng đến toàn bộ component
import style from './Styling.module.css'// chỉ ảnh hưởng đến component đó, những component khác không bị ảnh hưởng

export default class Styling extends Component {
    render() {
        //lưu ý: viết dưới dạng thuộc tính document.getElementById('txt').style.color = 'red'
        const styleText = {
            color: 'red',
            backgroundColor: 'black',
        }
        return (
            <div>
                <p className='txt'>Cao Thành Long</p>
                <p className={style.txtStyle}>Hello Anh Long</p>
                <p style={styleText}>Cao Thành Long</p>
                <p style={{
                    color: 'blue',
                    backgroundColor: 'yellow'
                }}>Cao Thành Long</p>
            </div>
        )
    }
}
