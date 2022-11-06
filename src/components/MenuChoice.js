import React, { useState } from 'react'
import { Menu, Dropdown, Flag } from 'semantic-ui-react'
import '../css/MenuChoice.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateLeagueId } from '../actions/actions'
import LeagueHeader from './LeagueHeader'

const leagueOptions = [
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

    const dispatch = useDispatch()
    const league = useSelector((state) => state.leagueId)
    const [activeItem, setActiveItem] = useState('')

    const handleItemClick = (e) => {
        console.log(e.target.innerText)
        setActiveItem(e.target.innerText)
    }

    const changeLeague = (e) => {

      if(e.target.innerText === 'Premier League') {
        dispatch(updateLeagueId('39'))
      }
      else if(e.target.innerText === 'La Liga') {
        dispatch(updateLeagueId('140'))
      }
      else if(e.target.innerText === 'Bundesliga') {
        dispatch(updateLeagueId('78'))
      }
      else if(e.target.innerText === 'Serie A') {
        dispatch(updateLeagueId('135'))
      }
      else if(e.target.innerText === 'Ligue 1') {
        dispatch(updateLeagueId('61'))
      }
      else if(e.target.innerText === 'Eredivise') {
        dispatch(updateLeagueId('88'))
      }
    }
  return (
    <>
      <Dropdown className='DropDownChoice'
        placeholder='Select Friend'
        fluid
        selection
        options={leagueOptions}
        defaultValue='Premier League'
        onChange={changeLeague}
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

      <LeagueHeader />

      {children}
    </>
  )
}

export default MenuChoice