import React, {Component} from 'react';
import PropTypes from "prop-types";

class MenuComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {name: 'link1'},
                {name: 'link2'},
                {name: 'link3'}
            ]
        }
    }
    render() {
        return (
            <header>
                <ul>
                    {this.props.links.map((i) =>
                        <li>{i.name}</li>)}
                </ul>
            </header>
        );
    }
}
MenuComponent.propTypes = {
    links: PropTypes.array};


export default MenuComponent;