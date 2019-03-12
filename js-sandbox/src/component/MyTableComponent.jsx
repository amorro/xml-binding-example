import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * MyTableComponent extiende el component
 */
class MyTableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    id: 'position',
                    name: '#'
                },
                {
                    id: 'name',
                    name: 'Name'
                },
                {
                    id: 'surname',
                    name: 'Surname'
                }
            ],
            data: [
                {
                    position: 1,
                    name: 'Cosas',
                    quantity: 'Otras cosas'
                }
            ]
        };
    }

    /**
     * constructor se ejecuta al principio
     *
     * state es el estado y cambia cuando se ejecuta
     *
     * render renderiza lo que tiene constructor
     */
    render() {
        return (
            <div className="mt-element-ribbon bg-steel">
                <h1>{this.props.title}</h1>
                <table>
                    {this.props.data.map((i) =>
                        <tr>
                            <td> {i.name} </td>
                            <td> {i.surname} </td>
                        </tr>)}
                </table>

            </div>
        );
    }
}

MyTableComponent.propTypes = {
    data: PropTypes.array,
    show: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    configOptions: PropTypes.object,
    title: PropTypes.string
};

export default MyTableComponent;