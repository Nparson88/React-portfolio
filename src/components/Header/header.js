import React from 'react';
import './header.css';

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
                                <a className="nav-link" href="/projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactMe">Contact Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/resume">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Header
