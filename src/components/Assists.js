import React, {useEffect, useState} from 'react'
import {Grid} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import { addAssists } from '../actions/actions'
import AssistsItem from './AssistsItem'
import '../css/Statistics.css'
import { updateLeagueInfo } from '../actions/actions'

function Assists() {

  const stats = useSelector((state) => state.topAssists)
  const leagueId = useSelector((state) => state.leagueId)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  // console.log('rows: ', rows[0])
  // console.log('stats: ', stats)

  //UseEffect Hook
  useEffect(() => {

    const apiCall = async() => {
      await fetch(`https://v3.football.api-sports.io/players/topassists?league=${leagueId}&season=2022`, {
        "method": "GET",
        "headers": {
          "x-apisports-key": process.env.REACT_APP_SPORTS_KEY
        }
      })
      .then((response) => response.json())
      .then((data) => {

        // console.log('data: ',data.response[0].statistics[0].league)
        
        // dispatch league info into global leagueInfo state
        dispatch(updateLeagueInfo({ 
          country: data.response[0].statistics[0].league.country,
          flag: data.response[0].statistics[0].league.flag,
          logo: data.response[0].statistics[0].league.logo,
          name: data.response[0].statistics[0].league.name,
          season: data.response[0].statistics[0].league.season
        }))

        //dispatch league info into global leagueInfo state
        dispatch(addAssists(leagueId, data.response))
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
            <AssistsItem index={0} /> 
           </Grid.Row>
  
          <Grid.Row columns={1}>
            <AssistsItem index={1} />
            
          </Grid.Row>
          <Grid.Row columns={1}>
            <AssistsItem index={2} />
            
          </Grid.Row>

          <Grid.Row columns={2}>
            <AssistsItem index={3} />
            <AssistsItem index={4} />
          </Grid.Row>

          <Grid.Row columns={2}>
            <AssistsItem index={5} />
            <AssistsItem index={6} />
          </Grid.Row>

          <Grid.Row columns={2}>
            <AssistsItem index={7} />
            <AssistsItem index={8} />
          </Grid.Row>

          <Grid.Row columns={2}>
            <AssistsItem index={9} />
            <AssistsItem index={10} />
          </Grid.Row>

          <Grid.Row columns={2}>
            <AssistsItem index={11} />
            <AssistsItem index={12} />
          </Grid.Row>
          
          <Grid.Row columns={2}>
            <AssistsItem index={13} />
            <AssistsItem index={14} />
          </Grid.Row>

          <Grid.Row columns={2}>
            <AssistsItem index={15} />
            <AssistsItem index={16} />
          </Grid.Row>

          

        </Grid>
      </> 
    )
  }
}

export default Assists