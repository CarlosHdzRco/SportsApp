import React, { useState } from 'react'
import { Menu, Dropdown, Flag } from 'semantic-ui-react'
import '../css/MenuChoice.css'
import {Link} from 'react-router-dom'

const friendOptions = [
  {
    key: 'Premier League',
    text: 'Premier League',
    value: 'Premier League',
    image: <Flag name='england' /> ,
  },
  {
    key: 'La Liga',
    text: 'La Liga',
    value: 'La Liga',
    image: <Flag name='spain' />,
  },
  {
    key: 'Bundesliga',
    text: 'Bundesliga',
    value: 'Bundesliga',
    image: <Flag name='germany' />,
  },
  {
    key: 'Serie A',
    text: 'Serie A',
    value: 'Serie A',
    image: <Flag name='italy' />,
  },
  {
    key: 'Ligue 1',
    text: 'Ligue 1',
    value: 'Ligue 1',
    image: <Flag name='france' />,
  },
  {
    key: 'Eredivise',
    text: 'Eredivise',
    value: 'Eredivise',
    image: <Flag name='netherlands' />,
  },
]

function MenuChoice({children}) {

    const [activeItem, setActiveItem] = useState()

    const handleItemClick = (e) => {
        console.log(e.target.innerText)
        setActiveItem(e.target.innerText)
    }
  return (
    <>
      <Dropdown className='DropDownChoice'
        placeholder='Select Friend'
        fluid
        selection
        options={friendOptions}
        defaultValue='Premier League'
      />

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