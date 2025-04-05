import './App.css'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx'
import React , { useState } from 'react';

function App(){
  const [page , setPage] = useState('Home');
return(
  <>
  {page == 'Home' && <Home onNavigate={()=>setPage('Dashboard')}/>};
  {page == 'Dashboard' && <Dashboard/>}
  
  </>  
)
};

export default App;