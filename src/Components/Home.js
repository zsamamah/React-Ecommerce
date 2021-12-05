import React, { Component } from 'react';
import Testimonial from './Testimonials';
import Team from './Ourteam';
import Intro from './Intro.js';
import Service from './Services';
import Youtube from './Youtube';
import Products from './Products';
import Slider from './Slider'

export default class Home extends Component {

    render() {
        return (
            <div className="homePageContainer">
                <Intro />
                <Service />
                {/* Intro background Khoulud  */}
                {/* API Weather Sanad */}
                <Testimonial />
                <Slider />
                <Team />
                {/* Featured products Rahaf */}
                {/* API Youtube Rahaf */}

                <Youtube />

            </div>
        )
    }
}
