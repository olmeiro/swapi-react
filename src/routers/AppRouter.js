import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<DashboardRoutes /> } />
      </Routes>
    </BrowserRouter>
  )
}
