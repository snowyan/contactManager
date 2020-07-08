import React, { Component } from 'react'

class Tablefilters extends Component {
   
    constructor() {
        super();
        this.state = {
            tables: [
                {
                    id: 1,
                    firstName: 'John',
                    lastName: 'Doe',
                    Email: 'John@example.com'
                },
                {
                    id: 2,
                    firstName: 'Mary',
                    lastName: 'Li',
                    Email: 'Mary@example.com'
                },
                {
                    id: 3,
                    firstName: 'Snow',
                    lastName: 'Yan',
                    Email: 'Snow@example.com'
                }
            ]
        }
    }
  
    render() {
        const { tables } = this.state;
        return (
            <div>
            {tables.map(table => (
                <h1>{table.firstName}</h1>
            ))
            }
            </div>
        )
    }
}

export default Tablefilters;