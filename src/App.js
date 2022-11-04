import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Standings from './components/Standings';
import Statistics from './components/Statistics';
import Matches from './components/Matches';
import MenuChoice from './components/MenuChoice';
import './css/MenuChoice.css'

function App() {

  
  return (
    <div className='container'>
      
      <Router>
        <MenuChoice>
          <Routes>
            <Route path="/" element={<Standings />}/>
            <Route path='/stats' element={<Statistics />}/>
            <Route path='/matches' element={<Matches />}/>
          </Routes>
        </MenuChoice>
      </Router>
      
    </div>
  );
}

export default App;


// console.log('cda424cc9326dd7ee2f9261e004844c9')