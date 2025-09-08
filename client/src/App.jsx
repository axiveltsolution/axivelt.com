import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound.jsx';

import NavBar from './Components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavBar/>
      </Router>
    </>
  )
}

export default App
