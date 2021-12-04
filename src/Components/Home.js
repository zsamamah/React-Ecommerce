import React, { Component } from 'react';
import Testimonial from './Testimonials';
import Team from './Ourteam';

export default class Home extends Component {
    render() {
        return (
            <div className="homePageContainer">
                <Team />
                <Testimonial />
            </div>
        )
    }
}
