import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="container px-lg-5">
            <a className='navbar-brand' href='#'>Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                        </ul>
             </div>
        </div>
    )
  }
}
