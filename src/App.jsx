import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Detail from './components/Detail'
import Meal from './components/Meal'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App
