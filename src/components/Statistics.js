import React, {useEffect, useState} from 'react'
import {Grid, Image, Loader, Segment, Dimmer} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import { addStatistics } from '../actions/actions'
import StatisticsItem from './StatisticsItem'
import '../css/Statistics.css'
import { updateLeagueInfo } from '../actions/actions'


function Statistics() {

  const leagueInfo = useSelector((state) => state.leagueInfo)
  const stats = useSelector((state) => state.statistics)
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
        dispatch(addStatistics(leagueId, data.response))
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
            <StatisticsItem index={0} /> 
           </Grid.Row>
  
          <Grid.Row columns={2}>
            <StatisticsItem index={1} />
            <StatisticsItem index={2} />
          </Grid.Row>

          <Grid.Row columns={2}>
            <StatisticsItem index={3} />
            <StatisticsItem index={4} />
          </Grid.Row>

          <Grid.Row columns={3}>
            <StatisticsItem index={5} />
            <StatisticsItem index={6} />
            <StatisticsItem index={7} />
          </Grid.Row>

          <Grid.Row columns={3}>
            <StatisticsItem index={8} />
            <StatisticsItem index={9} />
            <StatisticsItem index={10} />
            
          </Grid.Row>
          
          <Grid.Row columns={3}>
            <StatisticsItem index={11} />
            <StatisticsItem index={12} />
            <StatisticsItem index={13} />         
          </Grid.Row>

          <Grid.Row columns={3}>
            <StatisticsItem index={14} />
            <StatisticsItem index={15} />
            <StatisticsItem index={16} />
          </Grid.Row>


          <Grid.Row columns={3}>
            <StatisticsItem index={17} />
            <StatisticsItem index={18} />
            <StatisticsItem index={19} />
          </Grid.Row> 


        </Grid>
      </> 
    )
  }
  else {
    return (
      <Loader active inline />
    )
  }
}

export default Statistics