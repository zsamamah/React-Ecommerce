import React, { Component } from 'react';
import Testimonial from './Testimonials';
import Team from './Ourteam';
import Intro from './Intro.js';
import Service from './Services';

export default class Home extends Component {
    render() {
        return (
            <div className="homePageContainer">
                <Intro/>
                <Service/>
                {/* Intro background Khoulud  */}
                {/* API Weather Sanad */}
                <Team />
                <Testimonial />
                {/* Featured products Rahaf */}
                {/* API Youtube Rahaf */}
            </div>
        )
    }
}
