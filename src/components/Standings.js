import React, {useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateLeagueInfo, addStandings, updateActiveItem } from '../actions/actions'
import { Table, Loader} from 'semantic-ui-react'
import TableHeader from './TableHeader'
import StandingsItem from './StandingsItem'
import '../css/Standings.css'


function Standings() {

  const dispatch = useDispatch()
  const leagueId = useSelector((state) => state.leagueId)
  const standings = useSelector((state) => state.standings)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {

    //update active item for menu
    dispatch(updateActiveItem('Standings'))

    //api call definition
    const apiCall = async() => {
      await fetch(`https://v3.football.api-sports.io/standings?league=${leagueId}&season=2022`, {
        "method": "GET",
        "headers": {
          "x-apisports-key": process.env.REACT_APP_SPORTS_KEY
        }
      }).then((response) => response.json())
      .then((data) => {
      
        //update league info into global leagueInfo state
        dispatch(updateLeagueInfo({ 
          country: data.response[0].league.country,
          flag: data.response[0].league.flag,
          logo: data.response[0].league.logo,
          name: data.response[0].league.name,
          season: data.response[0].league.season
        }))

        //add standings info into global standings state
        dispatch(addStandings(data.response[0].league.id, data.response[0].league.standings[0]))
        
        setLoaded(true)
      })
    }     

    //make api call if global league id is different than standings league state
    if(String(leagueId) !== String(standings.league)) {
      apiCall()
    }
    else {
      setLoaded(true)
    }
    
  }, [leagueId])
  
  if(loaded === true) {
    return (
      <div className='standingsContainer'>

        <Table striped unstackable>
          <TableHeader />
          <Table.Body>
            {standings.standingsList.map((teamObj) => {
              return <StandingsItem key={teamObj.id} teamObj={teamObj}/>
            })}
          </Table.Body>
        </Table>
  
      </div>
    )
  }
  else {
    return (
      <Loader active inline />
    ) 
  }
  
}

export default Standings