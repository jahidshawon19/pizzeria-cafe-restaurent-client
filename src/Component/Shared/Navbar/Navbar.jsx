import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
        𝓟𝓲𝔃𝔃𝓮𝓻𝓲𝓪𝓒𝓪𝓯𝓮

        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav text-center">
            <li className="nav-item ">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">MENU</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">RESERVATION</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">GALLERY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">My order</Link>
            </li>
          </ul>
         
        </div>
      </nav>
    );
};

export default Navbar;