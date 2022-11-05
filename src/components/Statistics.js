import React, {useEffect} from 'react'
import {Grid, Image} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import { addStatistics } from '../actions/actions'
import StatisticsItem from './StatisticsItem'
import '../css/Statistics.css'


function Statistics() {

  const leagueInfo = useSelector((state) => state.leagueInfo)
  const statsLeague = useSelector((state) => state.statistics.league)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('stats use effect')
    console.log(String(leagueInfo.id))
    console.log(String(statsLeague))

    // if(String(leagueInfo.id) !== String(statsLeague)) {
    //   const apiCall = async() => {
    //     const response = await fetch("https://v3.football.api-sports.io/players/topscorers?league=39&season=2022", {
    //       "method": "GET",
    //       "headers": {
    //         "x-apisports-key": process.env.REACT_APP_SPORTS_KEY
    //       }
    //     })
    //     const data = await response.json()

    //     console.log('in api call stats: ')
    //     // console.log('data: ',data.response)
        
    //     //dispatch league info into global leagueInfo state
    //     dispatch(addStatistics({
    //       league: data.parameters.league,
    //       playerList: data.response
    //     }))

    //   }

    //   apiCall()
    // }
  }, [])

  return (
    <>
      {/* <Grid className='statisticsContainer'>

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


      </Grid>*/}
    </> 
  )
}

export default Statistics