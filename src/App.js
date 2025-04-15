
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import UsersPage from './pages/UsersPage/UsersPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/users' element={<UsersPage /> }/>
        <Route path='/profile/:id' element={<ProfilePage /> }/>
        <Route path='/login' element={<LoginPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
