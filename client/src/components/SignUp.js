import React, { Component } from 'react'
import createUser from '../actions'

export default class NewUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            state: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          });
    }
    
    handleClick = (e) => {
        // console.log(e.target.firstName.value) return first name entered
        e.preventDefault();
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const city = this.state.city;
        const state = this.state.state;
        const email = this.state.email;
        createUser({ firstName, lastName, city, state, email })   
    }

    render() {
        return (
            <form className='card' id='newForm' onSubmit={this.handleClick}>
              <h3>add a new user!</h3>
                <label>first name: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='firstName' placeholder='Jane'></input>
                
                <label>last name: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='lastName' placeholder='Doe'></input>
                
                <label>city: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='city' placeholder='Boston'></input>

                <label>state: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='state' placeholder='Massachusetts'></input>

                <label>email: </label>
                    <input className='field' onChange={this.handleChange} type='text' name='email' placeholder='janedoe@gmail.com'></input> 
                
                <button id='registerBtn' type='submit' onClick={this.handleClick}> submit </button>   
            </form>
        )
    }
}
