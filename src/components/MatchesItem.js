import React from 'react'
import { Grid, Image, Statistic } from 'semantic-ui-react'
import '../css/MatchesItem.css'

function MatchesItem({matchObj}) {
    console.log(matchObj)
    const date = matchObj.fixture.date.slice(0,10)
    const time = matchObj.fixture.date.slice(11,16)

  return (
    <>
        <Grid.Row>
            <Grid.Column width={3}>
                <Image src={matchObj.teams.home.logo} />
            </Grid.Column>
            <Grid.Column  width={10}>
                <div className='matchMiddleContent'>
                    <Statistic size='tiny'>
                        <Statistic.Value>VS</Statistic.Value>
                    </Statistic>
                    <div>
                        {time}
                    </div>
                    <div>
                        {date}
                    </div>
                    <div>
                        {matchObj.fixture.venue.name}
                    </div>
                </div>
                

            </Grid.Column>
            <Grid.Column width={3}>
                <Image src={matchObj.teams.away.logo} />
            </Grid.Column>
        </Grid.Row>
    </>
  )
}

export default MatchesItem