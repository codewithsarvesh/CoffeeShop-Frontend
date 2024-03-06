
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/common/Header';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
        <div>
          <Header/>
            <Routes>
                <Route path='/' element={<Homepage />}/>
            </Routes>
        </div>
    </Router> 
  );
}

export default App;
