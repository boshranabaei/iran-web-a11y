import './navigation.scss';
import {
    NAV_ABOUT_US, NAV_DESIGN, NAV_MORE, NAV_PROGRAMMING, NAV_WHAT,
} from "../assets/strings/constantTitles";
import {Link} from "react-router-dom";

function Navigation(props) {
    if(props < 450) {
        return (
          <nav tabIndex={-1}>
              <Link to="/">{NAV_MORE}</Link>
              <Link to="/">{NAV_DESIGN}</Link>
              <Link to="/">{NAV_PROGRAMMING}</Link>
          </nav>
        )
    } else {
        return (
            <nav tabIndex={-1}>
                <Link to="/">{NAV_ABOUT_US}</Link>
                <Link to="/">{NAV_WHAT}</Link>
                <Link to="/">{NAV_DESIGN}</Link>
                <Link to="/test">{NAV_PROGRAMMING}</Link>
            </nav>
        );
    }
}

export default Navigation;
