import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Map from './Map'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from "react-dom/client"
import './index.css'

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='App' element={<App />} />    
    <Route path='/' element={<App />} />    
    <Route path='Map' element={<Map />} />    
  </Routes>
  </BrowserRouter>
)
