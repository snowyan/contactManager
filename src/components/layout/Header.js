import React from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {
    const { branding } = props;
    return (
       <nav className="navbar navbar-expand-sm 
       navbar-dark bg-danger mb-3 py-0">
           <div className="container">
               <a href="/" className="navbar-brand">
                   {branding}
               </a>
               <div>
                   <ul className="navbar-nav mr-auto">
                       <li className="nav-item">
                           <Link to="/" className="nav-link">
                               <i className="fas fa-home" /> Home
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/add" className="nav-link">
                           <i className="fas fa-plus" />Add
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/about" className="nav-link">
                           <i className="fas fa-question" />About
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/filtertable" className="nav-link">
                           <i className="fas fa-search" />About
                           </Link>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
    );
};

Header.defaultProps = {
    branding: "My App"
}

const headingStyle = {
    color: 'red',
    fontSize: '50px'
}

export default Header;