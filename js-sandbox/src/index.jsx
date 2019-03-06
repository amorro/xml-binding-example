import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapTable from 'bootstrap-react-table';

const title = "Hi cosa";
let myData = ["Pepito", "Joselito", "Juanito", "ito"];
let myComplexData = [
    {name:"Pepito0", surname:"Palotes0"},
    {name:"Pepito1", surname:"Palotes1"},
    {name:"Pepito2", surname:"Palotes2"},
    {name:"Pepito3", surname:"Palotes3"}];

const columns = [
    {
        id: 'position',
        name: '#',
        first: true,
    },
    {
        id: 'name',
        name: 'Name'
    },
    {
        id: 'quantity',
        name: 'Quantity'
    }
];

const data = [
    {
        position: 1,
        name: 'Black shoes',
        quantity: 12
    }
];

ReactDOM.render(
    <div className="container">
        <h1>{title}</h1>
        <ul>
            <li>yuhu</li>
            {myData.map((v)=>
                <li>{v}</li>
            )}
        </ul>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Surame</th>
            </tr>
            </thead>
            <tbody>
            {myComplexData.map((item) =>
            <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
            </tr>)}
            </tbody>
        </table>
        <BootstrapTable columns={columns} data={data}/>
    </div>,
    document.getElementById('app')
);

console.log("cosa");