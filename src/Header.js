/**
 * Created by rpowar on 12/11/17.
 */
import React, { Component } from 'react';
import logo from './images/Headshot.jpg';
import {Link} from 'react-router-dom';

class Header extends Component{
    componentDidMount(){
        (function animateText(){
            let nameElement = document.getElementsByClassName("App-title");
            let animatedText = "RAJ POWAR".split('');
            //nameElement.textContent = "";
            let counter = 0;
            let animationIntervalId = setInterval(function () {
                nameElement[0].children[0].innerHTML += animatedText[counter];
                counter++;

                if(counter === animatedText.length){
                    clearInterval(animationIntervalId);
                }
            }, 150);
        }());
    }
    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">
                    <span id="nameText"></span>
                </h1>
                <div>
                    <Link className="links" to="/">About</Link>
                    <Link className="links" to="/skills">Skills</Link>
                    <Link className="links" to="/experience">Experience</Link>
                </div>
            </header>
        );
    }

}

export default Header;