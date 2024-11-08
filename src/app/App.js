import './App.scss';
import {Routes, Route, Link} from "react-router-dom";
import homeTitleLogo from "../assets/img/home-title-tr.png";
import siteLogo from "../assets/img/logo-tr.png";
import Home from "../home/home";
import Programing from "../programing/programing";
import Design from "../design/design";

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
                        <Route path="/design" element={<Design/>}></Route>
                        <Route path="/programming" element={<Programing/>}> </Route>
                    </Routes>
                }
            </main>
        </>
    )
}

export default App;
