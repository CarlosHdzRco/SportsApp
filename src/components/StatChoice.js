import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import '../css/StatChoice.css'
import { useSelector } from 'react-redux'

function StatChoice() {

  const standingsActiveItem = useSelector((state) => state.standingsActiveItem)

  return (
    <>
        <Menu className='StatChoice'>
          <Menu.Item className='statItem' as={Link} to='/stats/' name='Goals' active={standingsActiveItem === 'Goals'}>
            <h4 className='menuText'>Goals</h4>
          </Menu.Item>
          
          <Menu.Item className='statItem' as={Link} to='/stats/assists' name='Statistics' active={standingsActiveItem === 'Assists'}>
            <h4 className='menuText'>Assists</h4>
          </Menu.Item>
      </Menu>
    </>
  )
}

export default StatChoice