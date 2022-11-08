import React from 'react'
import { Grid, Image, Segment, Label, Statistic, Icon } from 'semantic-ui-react'
import '../css/StatisticsItem.css'

function GoalsItem({index, goalObj}) {

    if(index === 0){
        return (
            <>
                <Grid.Column className='statsColumn'>
                    <Segment >
                        <Label color='green' attached='top left'>{index+1}</Label>
                        <Statistic.Group className='statsGroup' size='small'>

                            <Statistic className='nameStat'>
                                <Statistic.Value>
                                    <Image src={goalObj.player.photo} inline circular />
                                </Statistic.Value>
                                <Statistic.Label>{goalObj.player.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='nameLogoStat'>
                                <Statistic.Value>
                                    <Image src={goalObj.statistics[0].team.logo} inline />
                                </Statistic.Value>
                                <Statistic.Label>{goalObj.statistics[0].team.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='gamesStat'>
                                <Statistic.Value>{goalObj.statistics[0].games.appearences}</Statistic.Value>
                                <Statistic.Label>Games</Statistic.Label>
                            </Statistic>

                            <Statistic className='goalsStat'>
                                <Statistic.Value>
                                    <Icon name='soccer' />{goalObj.statistics[0].goals.total}
                                </Statistic.Value>
                                <Statistic.Label>Goals</Statistic.Label>
                            </Statistic>

                        </Statistic.Group>
                        
                    </Segment>
                </Grid.Column>
            </>
          )
    }

    if(index === 1 || index === 2 || index === 3){
        return (
            <>
                <Grid.Column className='statsColumn'>
                    <Segment >
                            <Label color='yellow' attached='top left'>{index+1}</Label>
                        <Statistic.Group className='statsGroup' size='small'>

                            <Statistic className='nameStat'>
                                <Statistic.Value>
                                    <Image src={goalObj.player.photo} inline circular />
                                </Statistic.Value>
                                <Statistic.Label>{goalObj.player.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='nameLogoStat'>
                                <Statistic.Value>
                                    <Image src={goalObj.statistics[0].team.logo} inline />
                                </Statistic.Value>
                                <Statistic.Label>{goalObj.statistics[0].team.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='gamesStat'>
                                <Statistic.Value>{goalObj.statistics[0].games.appearences}</Statistic.Value>
                                <Statistic.Label>Games</Statistic.Label>
                            </Statistic>

                            <Statistic className='goalsStat'>
                                <Statistic.Value>
                                    <Icon name='soccer' />{goalObj.statistics[0].goals.total}
                                </Statistic.Value>
                                <Statistic.Label>Goals</Statistic.Label>
                            </Statistic>

                        </Statistic.Group>
                    
                    </Segment>
                </Grid.Column>
            </>
          )
    }

    else {
        return (
            <>
                <Grid.Column className='statsColumn'>
                    <Segment >
                            <Label color='red' attached='top left'>{index+1}</Label>
                        <Statistic.Group className='statsGroup' size='small'>

                            <Statistic className='nameStat2'>
                                <Statistic.Value>
                                    <Image src={goalObj.player.photo} inline circular />
                                </Statistic.Value>
                                <Statistic.Label>{goalObj.player.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='nameLogoStat2'>
                                <Statistic.Value>
                                    <Image src={goalObj.statistics[0].team.logo} inline />
                                </Statistic.Value>
                                <Statistic.Label>{goalObj.statistics[0].team.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='goalsStat2'>
                                <Statistic.Value>
                                    <Icon className='soccerIcon' name='soccer' />{goalObj.statistics[0].goals.total}
                                </Statistic.Value>
                                <Statistic.Label>Goals</Statistic.Label>
                            </Statistic>

                        </Statistic.Group>
                    
                    </Segment>
                </Grid.Column>
            </>
          )
    }

}

export default GoalsItem