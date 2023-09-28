import logo from './tiles.jpg';
import './App.css';
import NavigationLinks from './Components/NavigationLinks';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Collections from './Components/Collections'
import TilesCart from './Components/TilesCart';
import ErrorPage from './Components/ErrorPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <p>
          Welcome to KSK tiles
        </p>
        <NavigationLinks/>
        <Routes>
          <Route>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/product" element={<Collections/>} />
          <Route path="/loginpage" element={<LoginPage/>} >
           <Route path="tilescart" element={<TilesCart/>} />
           <Route path= 'errorpage' element = {<ErrorPage/>}/>
          </Route>

          
          </Route>
       
        </Routes>
      </header>
    </div>
  );
}

export default App;
