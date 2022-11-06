import React, {useEffect, useState} from 'react'
import '../css/Matches.css'
import { Grid, Image, Dimmer, Loader } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import { addMatches } from '../actions/actions'
import MatchesItem from './MatchesItem'



function Matches() {

  const leagueInfo = useSelector((state) => state.leagueInfo)
  const matches = useSelector((state) => state.matches)
  const leagueId = useSelector((state) => state.leagueId)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  //UseEffect Hook
  useEffect(() => {

    const apiCall = async() => {
      await fetch(`https://v3.football.api-sports.io/fixtures?league=${leagueId}&season=2022&status=NS&timezone=America/Chicago&next=20`, {
        "method": "GET",
        "headers": {
          "x-apisports-key": process.env.REACT_APP_SPORTS_KEY
        }
      })
      .then((response) => response.json())
      .then((data) => {

        // console.log(data.response)
        //dispatch league info into global leagueInfo state
        dispatch(addMatches(leagueId, data.response))
        setLoaded(true)
      })

    }

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
            return <MatchesItem key={matchObj.id} matchObj={matchObj}/>
          })

          }
        </Grid>
      </div>
      
    )
  }
  else {
    return (
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>

    ) 
  }

}

export default Matches