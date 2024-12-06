import './App.scss';
import {Routes, Route, Link, useLocation} from "react-router-dom";
import Home from "../home/home";
import Programming from "../programming/programming";
import Design from "../design/design";
import Breadcrump from '../breadcrump/breadcrump';

function App() {
    const titleImg = `${process.env.PUBLIC_URL}/assets/img/home-title-tr.png`;
    const logoImg = `${process.env.PUBLIC_URL}/assets/img/logo-tr.png`;
    const shouldShowBreadcrump = useLocation().pathname !== '/';
    return(
        <>
            <header>
                <Link to='/'>
                    <img id="titleImg" alt="ss" src={titleImg}/>
                    <img id="logoImg" alt="ss" src={logoImg}/>
                </Link>
                <br/>
                {shouldShowBreadcrump && Breadcrump()}
            </header>
            <main>
                {
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/design" element={<Design/>}></Route>
                        <Route path="/programming" element={<Programming/>}> </Route>
                    </Routes>
                }
            </main>
        </>
    )
}

export default App;
