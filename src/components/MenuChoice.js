import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import '../css/MenuChoice.css'
import {Link} from 'react-router-dom'

function MenuChoice({children}) {

    const [activeItem, setActiveItem] = useState()

    const handleItemClick = (e) => {
        console.log(e.target.innerText)
        setActiveItem(e.target.innerText)
    }
  return (
    <>
        <Menu className='MenuChoice'>
        {/* <li> <Link to="/">Home</Link> </li> */}

            <Menu.Item as={Link} to='/'
            name='Standings'
            active={activeItem === 'Standings'}
            onClick={handleItemClick}
            >
            <h4 className='menuText'>Standings</h4>
            </Menu.Item>
            
            <Menu.Item as={Link} to='/stats'
            name='Statistics'
            active={activeItem === 'Stats'}
            onClick={handleItemClick}
            >
            <h4 className='menuText'>Stats</h4>
            </Menu.Item>

            <Menu.Item as={Link} to='/matches'
            name='Matches'
            active={activeItem === 'Matches'}
            onClick={handleItemClick}
            >
            <h4 className='menuText'>Matches</h4>
            </Menu.Item>
        </Menu>

        {children}
    </>
  )
}

export default MenuChoice