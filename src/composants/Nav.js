import React,{ useState } from "react";
import { ReactComponent as IkeaLogo } from "./logo-ikea.svg";
import Hamburger from "./Hamburger";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div className="navbar">
      <nav className="inner-nav">
        <span className="logo">
          <IkeaLogo />
        </span>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </nav>

      <div className="menu">
        <div className="Go">
          <h2>Information</h2>
        </div>
        <ul>
          <li>Models and textures made in Blender</li>
          <li>Objects imported using React Three Fiber </li>
        </ul>
        <style jsx="true">{`
          .menu {
            display: ${hamburgerOpen ? "inline" : "none"};
          }
        `}</style>
      </div>
    </div>
  );
}
