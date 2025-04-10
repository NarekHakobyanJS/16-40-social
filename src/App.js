import { useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk } from './store/reducers/usersReducer';


function App() {
  const {isFetching} = useSelector((state) => state.usersPage)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getUsersThunk())
    
  }, [])
  return (
    <div className="App">
      {
        isFetching ? <h1>Loading...</h1> : ''
      }
    </div>
  );
}

export default App;
