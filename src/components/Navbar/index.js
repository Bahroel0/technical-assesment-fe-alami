import {Link} from "react-router-dom";
import { useState } from "react";
import "../../styles/index.css"
import "./index.css";
import IconMenu from "../IconMenu";
import { Cart, Search, ChevronCompactDown } from "react-bootstrap-icons";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navbar">
      <div className={ isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <ul>
          <li>
            <Link to="/demos">
              <button>Demos <ChevronCompactDown /></button>
            </Link>
          </li>
          <li>
            <button>Pages <ChevronCompactDown /></button>
          </li>
          <li>
            <button>Portfolio <ChevronCompactDown /></button>
          </li>
          <li id="nav-icon-menu">
            <IconMenu position="horizontal"/>
          </li>
        </ul>
      </div>
      <Cart className="ml-auto"/>
      <Search className="ml-1"/>
      <form className="ml-1 search-form">
          <input className="mr-1 py-2"/>
      </form>
      <button className="hamburger ml-1" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
     
    </nav>
  );
}
