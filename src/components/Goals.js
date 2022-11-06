import React, {useEffect, useState} from 'react'
import { Grid } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import { addGoals } from '../actions/actions'
import GoalsItem from './GoalsItem'
import '../css/Statistics.css'
import { updateLeagueInfo } from '../actions/actions'

function Goals() {

  const stats = useSelector((state) => state.topGoals)
  const leagueId = useSelector((state) => state.leagueId)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  // console.log('rows: ', rows[0])
  // console.log('stats: ', stats)

  //UseEffect Hook
  useEffect(() => {

    const apiCall = async() => {
      await fetch(`https://v3.football.api-sports.io/players/topscorers?league=${leagueId}&season=2022`, {
        "method": "GET",
        "headers": {
          "x-apisports-key": process.env.REACT_APP_SPORTS_KEY
        }
      })
      .then((response) => response.json())
      .then((data) => {

        console.log('data: ',data.response[0].statistics[0].league)
        
        // dispatch league info into global leagueInfo state
        dispatch(updateLeagueInfo({ 
          country: data.response[0].statistics[0].league.country,
          flag: data.response[0].statistics[0].league.flag,
          logo: data.response[0].statistics[0].league.logo,
          name: data.response[0].statistics[0].league.name,
          season: data.response[0].statistics[0].league.season
        }))

        //dispatch league info into global leagueInfo state
        dispatch(addGoals(leagueId, data.response))
        setLoaded(true)
      })

    }
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
          
          <Grid.Row columns={1}>
            <GoalsItem index={0} /> 
           </Grid.Row>
  
          <Grid.Row columns={2}>
            <GoalsItem index={1} />
            <GoalsItem index={2} />
          </Grid.Row>

          <Grid.Row columns={2}>
            <GoalsItem index={3} />
            <GoalsItem index={4} />
          </Grid.Row>

          <Grid.Row columns={3}>
            <GoalsItem index={5} />
            <GoalsItem index={6} />
            <GoalsItem index={7} />
          </Grid.Row>

          <Grid.Row columns={3}>
            <GoalsItem index={8} />
            <GoalsItem index={9} />
            <GoalsItem index={10} />
            
          </Grid.Row>
          
          <Grid.Row columns={3}>
            <GoalsItem index={11} />
            <GoalsItem index={12} />
            <GoalsItem index={13} />         
          </Grid.Row>

          <Grid.Row columns={3}>
            <GoalsItem index={14} />
            <GoalsItem index={15} />
            <GoalsItem index={16} />
          </Grid.Row>
        </Grid>
      </> 
    )
  }

}

export default Goals