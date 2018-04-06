/**
 * Created by rpowar on 12/20/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class About extends Component {
    render() {
        return(
            <div className="container main">
                <div className="row pageTitle">
                    <h1>About Me</h1>
                </div>
                <div className="row content">
                    <p>
                        Hi! I am Raj.
                        I'm currently a graduate student at Seattle University working towards a Masters in Computer Science, and expecting to graduate in June 2018.
                        Before returning back to school for my Masters, I worked as a Software Engineer for 2.5 years. I have a Bachelors in Computer Science from San Jose State University(SJSU).
                    </p>
                    <p>
                        Outside of academics, in my spare time I try to participate in various activities. My personal hobbies include reading technology articles, watching/playing soccer, and exploring new places to eat.
                        Furthermore, I'm also a mentor for the mentorship program hosted by the Computer Science department.
                    </p>
                    <p>
                        I like working on web based applications and currently focusing on JavaScript, Node.js, React.js. I try to be curious about any other flavours in JS ecosystem.
                    </p>
                </div>
                <div className="row pageTitle backBtn">
                    <Link to="/" className="btn btn-outline-primary navBtn">
                        <i className="fa fa-chevron-left"></i>
                    </Link>
                </div>
                {/*<div className="bio">*/}
                    {/*<p>*/}
                       {/* Hi! I am Raj.
                        I'm currently a graduate student at Seattle University working towards a Masters in Computer Science, and expecting to graduate in June 2018.
                        Before returning back to school for my Masters, I worked as a Software Engineer for 2.5 years. I have a Bachelors in Computer Science from San Jose State University(SJSU).*/}
                    {/*</p>*/}
                {/*</div>*/}
                {/*<div className="bio">*/}
                    {/*<p>*/}
                        {/*Outside of academics, in my spare time I try to participate in various activities. My personal hobbies include reading technology articles, watching/playing soccer, and exploring new places to eat.*/}
                        {/*In addition, I'm also a mentor for the mentorship program hosted by the Computer Science department.*/}
                    {/*</p>*/}
                {/*</div>*/}
                {/*<div className="bio">*/}
                    {/*<p>*/}
                        {/*I like working on web based applications and currently focus on JavaScript, Node.js, React.js and try to be curious about any other flavours in JS ecosystem.*/}
                    {/*</p>*/}
                {/*</div>*/}
            </div>

        );
    }
}

export default About;