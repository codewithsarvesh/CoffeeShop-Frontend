
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/common/Header';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
        <div>
          <Header/>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/about' element={<AboutUs />}/>
                <Route path='/menu' element={<Menu />}/>
                <Route path='/contact'element={<Contact/>}/>
            </Routes>
        </div>
    </Router> 
  );
}

export default App;
