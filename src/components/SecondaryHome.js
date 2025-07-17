import React from 'react'
import RestHeader from './RestHeader'
import { Outlet } from 'react-router'

function SecondaryHome() {
  return (
    <div>
        <RestHeader></RestHeader>
        <Outlet></Outlet>
    </div>
  )
}

export default SecondaryHome