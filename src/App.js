
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import UsersPage from './pages/UsersPage/UsersPage';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/users' element={<UsersPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
