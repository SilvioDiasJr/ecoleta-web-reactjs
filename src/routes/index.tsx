import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '@pages/Home'
import { RegisterEntities } from '@pages/RegisterEntities'

export const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterEntities />} />
      </Routes>
    </BrowserRouter>
  )
}
