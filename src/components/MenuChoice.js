import { Menu } from 'semantic-ui-react'
import '../css/MenuChoice.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LeagueHeader from './LeagueHeader'
import React from "react";
import DonateButton from './DonateButton'
import NavBar from './NavBar'

function MenuChoice({children}) {

    const dispatch = useDispatch()
    const activeItem = useSelector((state) => state.activeItem)


  return (
    <>
      <NavBar />
 
      <div className='menuContainer'>
        
        <Menu className='MenuChoice'>
            <Menu.Item as={Link} to='/' name='Standings' active={activeItem === 'Standings'}>
              <h4 className='menuText'>Standings</h4>
            </Menu.Item>
            
            <Menu.Item as={Link} to='/stats' name='Statistics' active={activeItem === 'Stats'}>
              <h4 className='menuText'>Stats</h4>
            </Menu.Item>

            <Menu.Item as={Link} to='/matches' name='Matches' active={activeItem === 'Matches'}>
              <h4 className='menuText'>Matches</h4>
            </Menu.Item>
        </Menu>

        <LeagueHeader />
      </div>

      <div className='childrenContainer'>
        {children}
      </div>
    
    </>
  )
}

export default MenuChoice