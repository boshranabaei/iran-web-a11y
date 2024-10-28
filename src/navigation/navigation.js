import './navigation.scss';
import {
    NAV_ABOUT_US, NAV_DESIGN, NAV_MORE, NAV_PROGRAMMING, NAV_WHAT,
} from "../assets/strings/constantTitles";
import {Link} from "react-router-dom";

function Navigation(props) {
    if(props < 450) {
        return (
          <nav tabIndex={-1}>
              <Link to="/">{NAV_PROGRAMMING}</Link>
              <Link to="/">{NAV_DESIGN}</Link>
              <Link to="/">
                  <i className="fa-solid fa-bars" aria-hidden="true" title={NAV_MORE}></i>
                  <span className="sr-only">{NAV_MORE}</span>
              </Link>
          </nav>
        )
    } else {
        return (
            <nav tabIndex={-1}>
                <Link to="/test">{NAV_PROGRAMMING}</Link>
                <Link to="/">{NAV_DESIGN}</Link>
                <Link to="/">{NAV_WHAT}</Link>
                <Link to="/">{NAV_ABOUT_US}</Link>
            </nav>
        );
    }
}

export default Navigation;
