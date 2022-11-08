import React from 'react'
import { Image } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import '../css/LeagueHeader.css'


function LeagueHeader() {

    const leagueInfo = useSelector((state) => state.leagueInfo)

  return (
    <div className='leagueHeaderContainer'>
        <Image className='leagueInfoLogo' src={leagueInfo.logo}/>
        <div className='leaguInfoText'>
          {leagueInfo.name}
        </div>
        <Image className='leagueInfoFlag' src={leagueInfo.flag}/>
    </div>
  )
}

export default LeagueHeader