import React from 'react';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import  { useState } from 'react'

  function App() {
    const [role, setRole] = useState('guest');
    return (
      <div className="App">
        <PrivateRoutes role={role} setRole={setRole}/>
      </div>
    );
  }

export default App;
