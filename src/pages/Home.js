import React from 'react';
const AboutMe = () => {
    return (
        <div className="container card text-white bg-dark d-flex ">
            <img src={profile} className="img-fluid mx-auto rounded-circle" alt="profile" />
            <div className="d-flex justify-content-center">
                <h1 className="text-center mx-2 p-3">About Me</h1>
                <p className="scroll mx-2 p-3 ">Hello and thank you for visitng my portfolio, my name is Nich Parson and im from Cleveland, 
                Ohio. Recently i have finshed the full stack bootcamp at Case Western Reserve University where i created the projects you can find on this site.
                I am so excited to start my new career in this exciting industry</p>
            </div>
        </div>
    )
}
export default AboutMe