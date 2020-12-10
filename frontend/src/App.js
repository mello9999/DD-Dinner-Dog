import React, { useState, useEffect } from 'react';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import LocalStorageService from './services/localStorageService';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';
function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()


  useEffect(() => {
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  }, []);
  return (
    <div className="App" >
      
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
