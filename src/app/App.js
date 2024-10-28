import './App.scss';
import {Routes, Route, Link} from "react-router-dom";
import Home from "../home/home";
import homeTitleLogo from "../assets/img/home-title-tr.png";
import siteLogo from "../assets/img/logo-tr.png";
import Programing from "../programing/programing";

function App() {
    return(
        <>
            <header>
                <Link to='/'>
                    <img id="titleImg" alt="ss" src={homeTitleLogo}/>
                    <img id="logoImg" alt="ss" src={siteLogo}/>
                </Link>
                <br/>
            </header>
            <main>
                {
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/test" element={<Programing/>}> </Route>
                    </Routes>
                }
            </main>
        </>
    )
}

export default App;
