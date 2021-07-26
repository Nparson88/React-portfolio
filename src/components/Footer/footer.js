import React from 'react';

const Footer = () => {

    return (
      <nav className="navbar fixed-bottom bg-light d-flex justify-content-between flex-column flex-md-row">
        <large className="text-secondary text-center">
        React Portfolio by Nich Parson | Nparson88@gmail.com | (440)539-1548 | www.github.com/Nparson88    
        </large>
  
        <div className="d-flex">
  
          <a className="nav-item nav-link p-0 ml-2" href='mailto:Nparson88@gmail.com'>
            <h1><i className="bi bi-envelope-fill"></i></h1> 
          </a>
          <a className="nav-item nav-link p-0 ml-2" href="https://github.com/Nparson88"
            rel="noopener noreferrer" target="blank">
            <h1><i className="bi bi-github"></i></h1> 
          </a>
          <a className="nav-item nav-link p-0 ml-2" href="https://www.linkedin.com/in/nich-parson-2862a9210/"
            rel="noopener noreferrer" target="blank">
            <h1><i className="bi bi-linkedin"></i></h1> 
          </a>
  
  
        </div>
  
      </nav>
    )
  }
  
  export default Footer;


<section className='container-fluid'>
    <button type="button" class="btn btn-outline-danger btn-lg mx-3"><a href="https://www.gmail.com" target="blank"><i class="fa fa-envelope fa-5x"></i></a></button>

    <button type="button" class="btn btn-outline-danger btn-lg mx-3"><a href="https://github.com/Nparson88" target="blank"><i class="fa fa-github fa-5x"></i></a></button>

    <button type="button" class="btn btn-outline-danger btn-lg mx-3"><a href="https://www.linkedin.com/in/nich-parson-2862a9210/" target="blank"><i class="fa fa-linkedin fa-5x"></i></a></button>

    <p>React Portfolio by Nich Parson | Nparson88@gmail.com | (440)539-1548 | www.github.com/Nparson88</p>  
</section>