import React, { Component } from 'react'

export default class Navbar extends Component {
  
  render() {
    let {tittle}=this.props;
    return (
          <> 
        <div className="nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#" id="tittle">{tittle}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#" id="list">Home <span className="sr-only">(current)</span></a>
      </li>
  
    <li className="nav-item active">
        <a className="nav-link" href="#" id="list">Headquarters<span className="sr-only">(current)</span></a>
      </li>
    <li className="nav-item active">
        <a className="nav-link" href="#" id="list">Team Members<span className="sr-only">(current)</span></a>
      </li>
    <li className="nav-item active">
        <a className="nav-link" href="#" id="list">Join Uss<span className="sr-only">(current)</span></a>
      </li>
     
    </ul>
   
  </div>
</nav>
      </div>
      </>
    )
  }}