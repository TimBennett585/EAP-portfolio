import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faFileAlt,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#6E268C" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#6E268C" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="cv-link"
        to="/cv"
      >
        <FontAwesomeIcon icon={faFileAlt} color="#6E268C" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="research-link"
        to="/research"
      >
        <FontAwesomeIcon icon={faBook} color="#6E268C" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#6E268C" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/timbennett585/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#6E268C" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/TimBennett585"
        >
          <FontAwesomeIcon icon={faGithub} color="#6E268C" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
