import React, { Component } from 'react';

import './Login.css';
import logoAms from '../../img/ams_logo.png';

class Login extends Component{
    state = {
        user : '',
        password : '',
    }
    
    handleSubmit = event =>{
        alert(`user: ${this.state.user} - password: ${this.state.password}`);
    }

    handleChange = event =>{
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
            <div id='loginArea'>
                <img src={logoAms} className='logoAms' alt=''></img>
                <span className='logoDesc'>ASSET MANAGEMENT SYSTEM</span>
                <form className='login' onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='user'
                        placeholder='ex: user@domain.com'
                        onChange={this.handleChange}
                        value={this.state.user}
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='your password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}

export default Login;