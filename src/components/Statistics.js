import React from 'react'
import '../css/Statistics.css'
import StatChoice from './StatChoice'
import { Outlet } from 'react-router-dom'


function Statistics() {
  return (
    <>
      <StatChoice />

      <Outlet />

    </> 
  )
}


export default Statistics