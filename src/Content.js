/**
 * Created by rpowar on 12/11/17.
 */
import React, { Component } from 'react';

class Content extends Component{
    render(){
        return(
            <article className="mainContent">
                <div className="bio">
                    <p>
                        Hi! I am Raj.
                        I'm currently a graduate student at Seattle University working towards a Masters in Computer Science, and expecting to graduate in June 2018.
                        Before returning back to school for my Masters, I worked as a Software Engineer for 2.5 years. I have a Bachelors in Computer Science from San Jose State University(SJSU).
                    </p>
                </div>
                 <div className="bio">
                     <p>
                         Outside of academics, in my spare time I try to participate in various activities. My personal hobbies include reading technology articles, watching/playing soccer, and exploring new places to eat.
                         In addition, I'm also a mentor for the mentorship program hosted by the Computer Science department.
                     </p>
                 </div>
                <div className="bio">
                    <p>
                        I like working on web based applications and currently focus on JavaScript, Node.js, React.js and try to be curious about any other flavours in JS ecosystem.
                    </p>
                </div>
            </article>
        );
    }
}

export default Content;