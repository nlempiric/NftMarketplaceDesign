import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Homepage from './pages/Homepage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
