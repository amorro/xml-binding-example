import React, {Component} from 'react';

/**
 * MyTableComponent extiende el component
 */
class MyTableComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {columns: [
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
                <table>
                    for-each:columns
                    for-each:data
                </table>
            </div>
        );
    }
}

export default MyTableComponent;