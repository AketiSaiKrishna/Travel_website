import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>IPSUM</h1>
                 <p>Choose your favourite Destination</p>
            </div>
            <div className='links'>
                <a href='/'><i className='fa-brands fa-facebook-square'></i></a>
                <a href='/'><i className='fa-brands fa-instagram-square'></i></a>
                <a href='/'><i className='fa-brands fa-twitter-square'></i></a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href='/'>Github</a>
                <a href='/'>Issues</a>
                <a href='/'>Project</a>
                <a href='/'>Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Trouble Shooting</a>
                <a href='/'>Contact us</a>
                <a href='/'>Call Center</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href='/'>Terms and Services</a>
                <a href='/'>Privacy</a>
                <a href='/'>Polices</a>
                <a href='/'>Licence</a>
            </div>
        </div>   
    </div>
  )
}

export default Footer;

