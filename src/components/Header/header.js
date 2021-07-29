import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'
const resume = 'https://docs.google.com/document/d/1wH4ehkXYX_VLyganLQV6-lgaMwpTt5xjxtkCKTw8W3Q/view?usp=sharing'
const Header = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <h1 className='header-title'>Nich Parson</h1>
            </header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pages</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link  " href="/aboutMe">About Me</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to ="/projects">Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={resume}>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Header
