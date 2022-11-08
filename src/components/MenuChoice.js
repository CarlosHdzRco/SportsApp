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
    key: 'Eredivisie',
    text: 'Eredivisie',
    value: 'Eredivisie',
    image: <Flag name='netherlands' />,
  },
]

function MenuChoice({children}) {

    const dispatch = useDispatch()
    const activeItem = useSelector((state) => state.activeItem)

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
    <>
      <div className='menuContainer'>
        <Dropdown className='DropDownChoice'
          placeholder='Select League'
          fluid
          selection
          options={leagueOptions}
          defaultValue='Premier League'
          onChange={changeLeague}
        />

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
      

      {/* <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="XL69VJDPU2PF6" />
        <input type="hidden" name="no_recurring" value="1" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form> */}

    </>
  )
}

export default MenuChoice