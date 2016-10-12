/**
 * Created by 1002720 on 2016. 9. 23..
 */
import React from 'react';
import { Link } from 'react-router'

class HeaderComponent extends React.Component {
    render() {
        const loginLink = (
            <Link to="/signin">Login</Link>
        );

        const logoutLink = (
            <Link to="/">Logout</Link>
        );

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Start Bootstrap</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                { this.props.isLogin ? logoutLink : loginLink }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}

HeaderComponent.propTypes = {
    isLogin : React.PropTypes.bool
};
HeaderComponent.defaultProps = {
    isLogin : false
};


export default HeaderComponent;