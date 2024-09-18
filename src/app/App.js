import './App.scss';
import {Routes, Route, Link} from "react-router-dom";
import Home from "../home/home";
import navigation from "../navigation/navigation";
import homeTitleLogo from "../assets/img/home-title-tr.png";
import siteLogo from "../assets/img/logo-tr.png";
import useWindowSize from "../hooks/useWindowsSize";

function App() {
    const windowSize = useWindowSize();
    return(
    <>
        <header>
            {windowSize.width < 450 ? navigation(windowSize.width) : null}
            <Link to='/'>
                <img id="titleImg" alt="ss" src={homeTitleLogo}/>
                <img id="logoImg" alt="ss" src={siteLogo}/>
            </Link>
            <br/>
            {windowSize.width >= 450 ? navigation(windowSize.width) : null}
        </header>
        {
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/test" element={<p>SALAM!</p>}></Route>
            </Routes>
        }
    </>
)}

export default App;
