/**
 * Created by rpowar on 12/12/17.
 */
import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="App-footer">
                <div className="container">
                    <div className="links">
                        <ul className="contactList">
                            <li>
                                <a href="mailto:raaj.powar@gmail.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/raj-powar/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/r-powar" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="copyWrite">
                        &copy; 2017 Raj Powar
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;