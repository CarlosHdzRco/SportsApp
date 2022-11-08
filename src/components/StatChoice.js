import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import '../css/StatChoice.css'

function StatChoice() {

    const [activeItem, setActiveItem] = useState('Goals')

    const handleItemClick = (e) => {
        console.log(e.target.innerText)
        setActiveItem(e.target.innerText)
    }
  return (
    <>
        <Menu className='StatChoice'>
          <Menu.Item className='statItem' as={Link} to='/stats/'
          name='Goals'
          active={activeItem === 'Goals'}
          onClick={handleItemClick}
          >
          <h4 className='menuText'>Goals</h4>
          </Menu.Item>
          
          <Menu.Item className='statItem' as={Link} to='/stats/assists'
          name='Statistics'
          active={activeItem === 'Assists'}
          onClick={handleItemClick}
          >
          <h4 className='menuText'>Assists</h4>
          </Menu.Item>
      </Menu>
    </>
  )
}

export default StatChoice