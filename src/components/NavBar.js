import React, { Component } from 'react'
import { Menu, Icon, Flag, Dropdown } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { updateLeagueId } from '../actions/actions'
import '../css/NavBar.css'


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
      key: 'Eredivisie',
      text: 'Eredivisie',
      value: 'Eredivisie',
      image: <Flag name='netherlands' />,
    },
  ]

function NavBar() {

    const dispatch = useDispatch()

    //change global leagueId state
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
        else if(e.target.innerText === 'Eredivisie') {
            dispatch(updateLeagueId('88'))
        }
        }

    return (

        <Menu>
            <Menu.Item name='home' className='soccerStats'>
                <Icon name='soccer' size='big' />
                <p className='statsText'>Info</p>
            </Menu.Item>

            <Menu.Item name='support' className='dropdown'>
                <Dropdown className='DropDownChoice'
                    placeholder='Select League'
                    fluid
                    selection
                    options={leagueOptions}
                    defaultValue='Premier League'
                    onChange={changeLeague}
                />
            </Menu.Item>
        </Menu>
    )
}

export default NavBar