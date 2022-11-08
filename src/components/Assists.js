import React, {useEffect, useState} from 'react'
import {Grid} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import { addAssists } from '../actions/actions'
import AssistsItem from './AssistsItem'
import DonateButton from './DonateButton'
import '../css/Statistics.css'
import { updateLeagueInfo, updateActiveItem, updateStandingsActiveItem } from '../actions/actions'

function Assists() {

  const stats = useSelector((state) => state.topAssists)
  const leagueId = useSelector((state) => state.leagueId)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  //UseEffect Hook
  useEffect(() => {
    //update menu active items
    dispatch(updateActiveItem('Stats'))
    dispatch(updateStandingsActiveItem('Assists'))

    //api call definition
    const apiCall = async() => {
      await fetch(`https://v3.football.api-sports.io/players/topassists?league=${leagueId}&season=2022`, {
        "method": "GET",
        "headers": {
          "x-apisports-key": process.env.REACT_APP_SPORTS_KEY
        }
      })
      .then((response) => response.json())
      .then((data) => {

        //update league info into global leagueInfo state
        dispatch(updateLeagueInfo({ 
          country: data.response[0].statistics[0].league.country,
          flag: data.response[0].statistics[0].league.flag,
          logo: data.response[0].statistics[0].league.logo,
          name: data.response[0].statistics[0].league.name,
          season: data.response[0].statistics[0].league.season
        }))

        //add assists object and league id into global leagueInfo state
        dispatch(addAssists(leagueId, data.response))
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
            {stats.playerList.slice(0,4).map((assistsObj,index) => {
              return <AssistsItem key={index} assistsObj={assistsObj} index={index}/>
            })}
           </Grid.Row>

          <Grid.Row className='twoColumn' columns={2}>
            {stats.playerList.slice(4).map((assistsObj,index) => {
              return <AssistsItem key={index} assistsObj={assistsObj} index={index+4}/>
            })}
          </Grid.Row>
          
        </Grid>

        <div className='donateButton'>
          <DonateButton />
        </div>
      </> 
    )
  }
}

export default Assists