import React from 'react';
import '../HomeAssets/Footer.css'


const Footer = () => (
<footer className="footer">
	<ul className="social">
    <a href="https://www.facebook.com/"  target="_blank"className="fab fa-facebook"></a>
    <a href="https://www.instagram.com/?nocaa=1" target="_blank" className="fab fa-instagram-square"></a>
    <a href="https://www.snapchat.com/" target="_blank"className="fab fa-snapchat-ghost"></a><br/>
    <a href="https://www.google.com/gmail/about/" target="_blank">Contact us</a><br/>
    <a href="https://www.google.com/maps/@32.0080674,35.8825037,15z"  className="fas fa-map-marker-alt" target="_blank"> <span className="footertext">Visit us</span></a>
    </ul>
    <p>All copy rights are reserved to group 4  ©2021 </p>
</footer>
);

export default Footer;
