import React, { Component } from 'react';
import Testimonial from './Testimonials';
import Team from './Ourteam';
import Youtube from './Youtube';
import Products from './Products';

export default class Home extends Component {

    render() {
        return (
            <div className="homePageContainer">
                {/* Intro background Khoulud  */}
                {/* API Weather Sanad */}
                <Team />
                <Testimonial />
                {/* Featured products Rahaf */}
                {/* API Youtube Rahaf */}

                <Youtube />
            </div>
        )
    }
}
