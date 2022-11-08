import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import '../css/LeagueHeader.css'


function LeagueHeader() {

    const leagueInfo = useSelector((state) => state.leagueInfo)


  return (
    <div className='leagueHeaderContainer'>

      <div className='leagueLogoText'>
        <Image className='leagueInfoLogo' src={leagueInfo.logo}/>
        <div className='leaguInfoText'>
          {leagueInfo.name}
        </div>
      </div>
      
      <div className='leagueInfoFlag'>
        <Image src={leagueInfo.flag}/>
      </div>
        
    </div>
  )
}

export default LeagueHeader