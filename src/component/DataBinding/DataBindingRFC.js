import React from 'react'

const school = 'CyberSoft';
const student = {
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

export default function DataBindingRFC() {
    const name = 'Long cyberlearn';
    return (
        <div>
            <h1>DataBindingRFC</h1>
            <h1 className="text-danger">{name}</h1>
            <h1>school: {school}</h1><h1>name: {student.name} - age: {student.age}</h1>
            {rederInfoVirus()}
        </div>
    )
}
