/**
 * Created by rpowar on 3/30/18.
 */
import React, {Component} from 'react';
import logo from '../images/Headshot.jpg';
import {Link} from 'react-router-dom';


class Main extends Component {
    render(){
        return(<div className="container main">
            <div className="row">
                <img src={logo} alt="logo" className="App-logo"/>
            </div>
            <div className="row App-title">
                <h3>
                    Raj Powar
                </h3>
            </div>
            <hr/>
            <div className="row App-title">
                <div className="socialItems">
                    <a className="socialBtns" href="mailto:raaj.powar@gmail.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-fw fa-envelope-square" aria-hidden="true"></i>
                    </a>
                    <a className="socialBtns" href="https://www.linkedin.com/in/raj-powar/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-fw fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    <a className="socialBtns" href="https://github.com/r-powar" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-fw fa-github-square" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <hr/>
            <div className="row App-title">
                <div className="navigate">
                    <Link className="btn btn-outline-primary navBtn" to="/about"> About </Link>
                    <Link className="btn btn-outline-primary navBtn" to="/skills"> Skills </Link>
                    <Link className="btn btn-outline-primary navBtn" to={process.env.PUBLIC_URL + '/Resume_RajP.pdf'} download> Resume </Link>
                </div>
            </div>
        </div>)
    }
}

export default Main;