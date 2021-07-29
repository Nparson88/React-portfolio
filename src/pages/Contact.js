import React from 'react'
import git from '../images/github.jpg'
import linked from '../images/linkedin.jpg'
const Contact = () => {
    return (
        
        <div className="card-group">
            <div className="card">
                <a href="https://github.com/Nparson88" >
                    <img className="card-img-top" src={git} alt="Card cap" />
                </a>
                <div className="card-body bg-dark text-white">
                    <h5 className="card-title">Github</h5>
                    <p className="card-text">click the picture to go to my github.</p>
                </div>
            </div>
            <div className="card">
                <a href="https://www.linkedin.com/in/nich-parson-2862a9210/">
                    <img className="card-img-top" src={linked} alt="Card cap" />
                </a>
                <div className="card-body bg-dark text-white">
                    <h5 className="card-title">linkedin</h5>
                    <p className="card-text">click the picture to go to my linkedin profile</p>
                </div>
            </div>
        </div>
    )
}
export default Contact