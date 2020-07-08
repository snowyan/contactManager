import React, { Component } from 'react';
import { Consumer } from '../../context';
import {v1 as uuid} from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onNameChange = e => {
        
        this.setState({name: e.target.value});
    //     this.setState({ 
    //     [e.target.name]: e.target.value
    // });
   };

   onEmailChange = e => {
       this.setState({email: e.target.value});
   };

   onPhoneChange = e => {
    this.setState({phone: e.target.value});
};

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact});
        
        this.setState({
            name: '',
            email: '',
            phone: ''
        });

        this.props.history.push('/');
        
        console.log(this.state);
        console.log(e);
    };

    render() {
        const {name, email, phone} = this.state;
        
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit = {this.onSubmit.bind(this, dispatch)}>
                        <TextInputGroup 
                          label="Name"
                          name="name"
                          placeholder="Enter Name"
                          value={name}
                          onChange={this.onNameChange}
                          />
                        <TextInputGroup 
                          label="Email"
                          name="email"
                          type="email"
                          placeholder="Enter Email"
                          value={email}
                          onChange={this.onEmailChange}
                          />
                          <TextInputGroup 
                          label="Phone"
                          name="phone"
                          placeholder="Enter Phone"
                          value={phone}
                          onChange={this.onPhoneChange}
                          />
                        <input 
                            type="submit" 
                            value="Add Contact"
                            className="btn btn-light btn-block"
                            />
                    </form>
                </div>
                
            </div>
                    )
                }
                }
            </Consumer>
        )
        
        
    }
}

export default AddContact;