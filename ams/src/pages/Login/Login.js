import React, { Component } from 'react';

import './Login.css';
import logoAms from '../../img/ams_logo.png';
import { login } from '../../services/auth';
import amsApi from '../../services/amsApi';

class Login extends Component{
    state = {
        user : '',
        password : '',
    }
    
    handleSubmit = async event =>{
        event.preventDefault();
        const response = await amsApi.post('/login/signin',{
            username : this.state.user,
            password : this.state.password,
        });
        
        if(response != null){
            login(response.data.token);
        }

        console.log(response);
    }

    handleChange = event =>{
        this.setState({[event.target.name] : event.target.value});
    }

    

    render(){
        return(
            <div id='loginArea'>         
                <form className='login' onSubmit={this.handleSubmit}>
                <header>
                    <img src={logoAms} alt=''></img>
                    <span>ASSET MANAGEMENT SYSTEM</span>
                </header>
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