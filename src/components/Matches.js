import React, {useEffect, useState} from 'react'
import '../css/Matches.css'
import { Grid, Loader } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import { addMatches } from '../actions/actions'
import MatchesItem from './MatchesItem'
import DonateButton from './DonateButton'
import { updateLeagueInfo, updateActiveItem } from '../actions/actions'

function Matches() {

  const matches = useSelector((state) => state.matches)
  const leagueId = useSelector((state) => state.leagueId)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  //UseEffect Hook
  useEffect(() => {
    dispatch(updateActiveItem('Matches'))

    const apiCall = async() => {
      await fetch(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=2022&status=NS&timezone=America/Chicago&next=20`, {
        "method": "GET",
        "headers": {
          "x-apisports-key": process.env.REACT_APP_SPORTS_KEY
        }
      })
      .then((response) => response.json())
      .then((data) => {

        //update league info into global leagueInfo state
        dispatch(updateLeagueInfo({ 
          country: data.response[0].league.country,
          flag: data.response[0].league.flag,
          logo: data.response[0].league.logo,
          name: data.response[0].league.name,
          season: data.response[0].league.season
        }))

        //add matches info into global matches state
        dispatch(addMatches(leagueId, data.response))
        
        setLoaded(true)
        
      })
    }

    //make api call if global league id is different than matches league state
    if(String(leagueId) !== String(matches.league)) {
      apiCall()
    }
    else {
      setLoaded(true)
    }

  }, [leagueId])

  if(loaded === true) {
    return (
      <div className='matchesContainer'>
        
        <Grid celled='internally'>
          {matches.matchesList.map((matchObj) => {
            return <MatchesItem key={matchObj.fixture.id} matchObj={matchObj}/>
          })}
        </Grid>



        <div className='supportText'>
          <h3>Support the creator</h3>
        </div>
        
        <div className='donateButton'>
          <DonateButton />
        </div>
      </div>
    )
  }
  else {
    return (
      <Loader active inline />
    ) 
  }

}

export default Matches