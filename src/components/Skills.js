/**
 * Created by rpowar on 12/21/17.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Skills extends Component {
    render() {
        return (
            <div className="container main">
                <div className="row pageTitle skillPage">
                    <h1>Skills</h1>
                </div>
                <div className="row skillContent">
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <h5>Front End:</h5>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>jQuery</li>
                            <li>Ajax</li>
                            <li>Angular2</li>
                            <li>Dust</li>
                            <li>Jade/Pug</li>
                            <li>LESS</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <h5>Back End:</h5>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Kraken</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                            <li>C++ (beginner)</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <h5>Other:</h5>
                        <ul>
                            <li>AWS</li>
                            <li>Git</li>
                            <li>Grunt</li>
                            <li>Unix</li>
                            <li>Mocha</li>
                            <li>Agile Development</li>
                            <li>GCP</li>
                            <li>Azure</li>
                        </ul>
                    </div>
                </div>
                <div className="row pageTitle backBtn">
                    <Link to="/" className="btn btn-outline-primary navBtn">
                        <i className="fa fa-chevron-left"></i>
                    </Link>
                </div>
            </div>

        );
    }
}

export default Skills;