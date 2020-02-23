import React, {Component} from 'react'
import axios from 'axios'
import {getUser} from '../redux/userReducer'
import {connect} from 'react-redux'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    registerUser = () => {
        const {email, password} = this.state
        
        if(email === '' || password === ''){
            alert('Email and password fields cannot be left empty.')
        }
        else {
            axios.post('http://localhost:4000/api/register', {email, password})
            .then(res => {
                this.props.history.push('/dashboard')
                this.props.getUser(res.data)
            })
            .catch(err => console.log(err))
        }
    }

    registerLink = () => {
        this.props.history.push('/register')
    }

    handleLogin = () => {
        axios.post('http://localhost:4000/api/login', {email: this.state.email, password: this.state.password})
            .then(res => {
                this.props.history.push('/dashboard')
                this.props.getUser(res.data)
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div id='login'>
                <div id='login-box'>
                    <h2>TextMeWhen</h2>
                    <h3>Email</h3>
                    <input placeholder='Enter Email' type='text' onChange={(event) => this.handleInput(event)} name='email' />
                    <h3>Password</h3>
                    <input placeholder='Enter Password' type='password' onChange={(event) => this.handleInput(event)} name='password' />
                    <button onClick={this.handleLogin} >Login</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth)