import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateLeagueInfo, addStandings } from '../actions/actions'
import { Header, Image, Table} from 'semantic-ui-react'
import TableHeader from './TableHeader'
import StandingsItem from './StandingsItem'
import '../css/Standings.css'

function Standings() {

  const dispatch = useDispatch()
  const leagueInfo = useSelector((state) => state.leagueInfo)
  const standings = useSelector((state) => state.standings)


  useEffect(() => {
    // console.log('standings use effect')

    if(leagueInfo.league === 0) {
      const apiCall = async() => {
        const response = await fetch("https://v3.football.api-sports.io/standings?league=39&season=2022", {
          "method": "GET",
          "headers": {
            "x-apisports-key": process.env.REACT_APP_SPORTS_KEY
          }
        })
        const data = await response.json()

        // console.log('country: ',data.response[0].league.standings)
        
        //dispatch league info into global leagueInfo state
        dispatch(updateLeagueInfo({id: data.response[0].league.id, 
          country: data.response[0].league.country,
          flag: data.response[0].league.flag,
          logo: data.response[0].league.logo,
          name: data.response[0].league.name,
          season: data.response[0].league.season
        }))

        //dispatch standings info into global standings state
        dispatch(addStandings(data.response[0].league.standings[0]))
      }

      apiCall()
    }
  }, [])
  
  return (
    <div className='standingsContainer'>
      {/* League Header */}
      <Header as='h2' className='leagueInfo'>
        <div className='leagueLogoText'>
          <Image className='leagueInfoLogo' src={leagueInfo.logo}/> 
          {leagueInfo.name}
        </div>
        <div className='leagueInfoFlag'>
          <Image src={leagueInfo.flag}/>
        </div>
       
      </Header>
      
      {/* Table Standings */}
      <Table striped>
        <TableHeader />
        <Table.Body>
          {standings.map((teamObj) => {
            return <StandingsItem key={teamObj.id} teamObj={teamObj}/>
          })}
        </Table.Body>
      </Table>

    </div>
  )
}

export default Standings