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

        return <header className="row"
        <div>

            {this.props.data.map((o) =>
                <a key={o.link}>{o.label}</a>
            )}
        </div>
    }
}

DummyHeaderComponent.propTypes = {
    data: PropTypes.array.isRequired
};

export default DummyHeaderComponent