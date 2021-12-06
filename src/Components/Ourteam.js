import React, { Component } from "react";
import "../HomeAssets/Ourteam.css";
import "../HomeAssets/im1.jpg";
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { name: "Zaid Samamah", title: "Scrum Master", image: "im11.jpg" },
      { name: "Shahed Khalayleh", title: "Product Owner", image: "im10.webp" },
      { name: "Kholoud Khraisat", title: "Web Developer", image: "im1.jpg" },
      { name: "Rahaf Arafeh", title: "Web Developer", image: "im12.webp" },
      { name: "Sanad Khamash", title: "Web Developer", image: "im16.jpg" }
    ];
  }

  render() {
    return (
      <div className='ourteam-container'>
        <h2 className="home-heading">Our Team</h2>
      {/* <div className="cardContainer"> */}
        <div className="memberContainer">
          {this.state.map((teamInfo,index) => {
            return (
              <div id={index} className="members">
                <img width="100%" src={teamInfo.image} alt="Team Member" className='ourteam-img'/>
                <h4>{teamInfo.name}</h4>
                <p>{teamInfo.title}</p>
                <a
                  id="contactIcon"
                  href="https://www.facebook.com/"
                ><i className="fab fa-facebook-f"></i></a>
                <a
                  id="contactIcon"
                  href="https://www.linkedin.com/"
                ><i className="fab fa-linkedin-in"></i></a>
                <a
                  id="contactIcon"
                  href="https://www.twitter.com/"
                ><i className="fab fa-twitter"></i></a>
              </div>
            );
          })}
        {/* </div> */}
      </div>
      </div>
    );
  }
}
export default Team;
