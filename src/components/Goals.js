import React, {useEffect, useState} from 'react'
import { Grid } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import { addGoals, updateActiveItem, updateLeagueInfo, updateStandingsActiveItem } from '../actions/actions'
import GoalsItem from './GoalsItem'
import '../css/Statistics.css'

function Goals() {

  const stats = useSelector((state) => state.topGoals)
  const leagueId = useSelector((state) => state.leagueId)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  //UseEffect Hook
  useEffect(() => {
    //update active items states in menu
    dispatch(updateActiveItem('Stats'))
    dispatch(updateStandingsActiveItem('Goals'))

    //api call definition
    const apiCall = async() => {
      await fetch(`https://v3.football.api-sports.io/players/topscorers?league=${leagueId}&season=2022`, {
        "method": "GET",
        "headers": {
          "x-apisports-key": process.env.REACT_APP_SPORTS_KEY
        }
      })
      .then((response) => response.json())
      .then((data) => {

        // update league info into global leagueInfo state
        dispatch(updateLeagueInfo({ 
          country: data.response[0].statistics[0].league.country,
          flag: data.response[0].statistics[0].league.flag,
          logo: data.response[0].statistics[0].league.logo,
          name: data.response[0].statistics[0].league.name,
          season: data.response[0].statistics[0].league.season
        }))

        //add goals object and league id into global leagueInfo state
        dispatch(addGoals(leagueId, data.response))
        setLoaded(true)
        })

    }

    //make api call if global id is not same as stats league
    if(String(leagueId) !== String(stats.league)) {
      apiCall()
    }
    else {
      setLoaded(true)
    }
  }, [leagueId])

  //wait to be loaded to render stats
  if(loaded === true) {
    return (
      <>
        <Grid className='statisticsContainer'>
          
          <Grid.Row className='oneColumn' columns={1}>
            {stats.playerList.slice(0,4).map((goalObj,index) => {
              return <GoalsItem key={index} goalObj={goalObj} index={index}/>
            })}
           </Grid.Row>

          <Grid.Row className='twoColumn' columns={2}>
            {stats.playerList.slice(4).map((goalObj,index) => {
              return <GoalsItem key={index} goalObj={goalObj} index={index+4}/>
            })}
          </Grid.Row>
          
        </Grid>
      </> 
    )
  }

}

export default Goals