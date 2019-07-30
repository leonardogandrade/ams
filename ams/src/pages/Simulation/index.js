import React, { Component } from 'react'
import './index.css'

export default class Simulation extends Component{
    render(){
        return(
            <div id='Simulation_body'>
                <div className='line'>
                    <button className='button1'
                        value=''
                        name=''
                        type='submit'
                        onSubmit=''
                    >Parada</button>
                     <button className='button2'
                        value=''
                        name=''
                        type='submit'
                        onSubmit=''
                    >Aquecimento</button>

                </div>

                <div className='line'>
                <button className='button3'
                        value=''
                        name=''
                        type='submit'
                        onSubmit=''
                    >Desligamento</button>
                    <button className='button4'
                        value=''
                        name=''
                        type='submit'
                        onSubmit=''
                    >Manutenção</button>
                </div>
            </div>
        )
    }
}