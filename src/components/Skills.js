/**
 * Created by rpowar on 12/21/17.
 */

import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div>
                    <h4>Skills</h4>

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <h5>Front-End</h5>
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>jQuery</li>
                                <li>Angular 2</li>
                                <li>Typescript</li>
                                <li>AJAX</li>
                                <li>Bootstrap</li>
                                <li>Dust</li>
                                <li>Pug</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <h5>Back-End</h5>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li><a href="http://krakenjs.com/" target="_blank" rel="noopener noreferrer">Kraken.js</a></li>
                                <li>MongoDB</li>
                                <li>Redis</li>
                                <li>C++</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <h5>Other</h5>
                            <ul>
                                <li>Git</li>
                                <li>Mocha/Chai</li>
                                <li>Jasmine</li>
                                <li>Google Cloud Platform</li>
                                <li>Azure</li>
                                <li>LESS</li>
                                <li>Unix</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Skills;