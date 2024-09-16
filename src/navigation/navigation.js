import './navigation.scss';
import {
    NAV_ABOUT_US, NAV_DESIGN, NAV_MORE, NAV_PROGRAMMING, NAV_WHAT,
} from "../assets/strings/constantTitles";

function Navigation(props) {
    if(props < 450) {
        return (
          <nav tabIndex={-1}>
              <a href={'#'}>{NAV_MORE}</a>
              <a href={'#'}>{NAV_DESIGN}</a>
              <a href={'#'}>{NAV_PROGRAMMING}</a>
          </nav>
        )
    } else {
        return (
            <nav tabIndex={-1}>
                <a href={'#'}>{NAV_ABOUT_US}</a>
                <a href={'#'}>{NAV_WHAT}</a>
                <a href={'#'}>{NAV_DESIGN}</a>
                <a href={'#'}>{NAV_PROGRAMMING}</a>
            </nav>
        );
    }
}

export default Navigation;
