import React from 'react';
import ReactDOM from 'react-dom';
import DummyHeaderComponent from "./component/DummyHeaderComponent";

const myMenu = [
    {label: "Home", Link: "*"},
    {label: "Link2", Link: "*"},
    {label: "Link3", Link: "*"}];

ReactDOM.render(
    <div className={"row"}>cosa
        <DummyHeaderComponent data={myMenu}/>
    </div>
    , document.getElementById('app')
);