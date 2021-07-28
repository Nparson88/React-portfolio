import React from 'react';
import headerImg from '../images/codingPic.jpg'
const AboutMe = () => {
    return (
        <div className="container card text-white bg-dark d-flex">
            <img src={headerImg} className="img-fluid" alt="profile" />
            <div className="d-flex justify-content-center">
                <h1 className="text-center mx-2 p-3">About Me</h1>
                <p className="scroll mx-2 p-3 ">Hello and thank you for visitng my portfolio, my name is Nich Parson and im from Cleveland, 
                Ohio. Recently i have finshed the full stack bootcamp at Case Western Reserve University where i created the projects you can find on this site.
                I am so excited to start my new career in this exciting industry. Feel free to take a look at the applications i developed during my time at Case Western
                as well as contact me regarding any projects or questions you may have.
                </p>
            </div>
        </div>
    )
}
export default AboutMe