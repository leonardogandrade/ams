import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div className='mainHeader'>
                <h2>AMS - Asset Management System</h2>
                <img src='https://images.vexels.com/media/users/3/145235/isolated/preview/cd265c4a79fde860ab3a853ee18186f6-funny-ant-thumbs-up-icon-by-vexels.png' alt=''></img>
            </div>
        )
    }
}

export default Header;