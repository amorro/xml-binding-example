import React, {Component} from 'react';
import PropTypes from "prop-types";
import DummyHeaderComponent from "./DummyHeaderComponent";

class DummyHeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        const myData = this.props.data;
        console.log(myData);

        return <h1>
            {this.props.data.map((o) =>
                <a href={o.link}>{o.label}</a>
            )}
        </h1>
    }
}

DummyHeaderComponent.propTypes = {
    data: PropTypes.array.isRequired
};

export default DummyHeaderComponent