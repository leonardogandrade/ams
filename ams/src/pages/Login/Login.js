import React, { Component } from 'react';

class Login extends Component{
    state = {
        user : '',
        password : '',
    }
    
    handleChange = event =>{
        this.setState({[event.target.name] : event.targe.value})
    }

    render(){
        return(
            <div>
                <form id='login' onSubmit=''>
                    <input 
                        type='text'
                        name='user'
                        placeholder='ex: user@domain.com'
                        onChange={this.handleChange}
                        value={this.state.user}
                    />
                    <input 
                        type='password'
                        name='passwd'
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