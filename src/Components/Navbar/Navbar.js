import React from 'react'

const Navbar = (props) => {
  return (
    <div><nav className={`navbar navbar-${props.myState.bg} navbar-expand-lg bg-${props.myState.bg}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.Head}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
        </ul>
        <div className="form-check form-switch mx-4">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar