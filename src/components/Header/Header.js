/**
 * Created by 1002720 on 2016. 9. 23..
 */
import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
        )

    }
}

export default HeaderComponent;