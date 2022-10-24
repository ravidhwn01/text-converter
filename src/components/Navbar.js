import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
       
            
           
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label clasNames="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.textChange}</label>
</div>
       
       
      </nav>
    </div>
  ); 
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  Abouttext: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "textConverter",
  Abouttext: "about",
};
