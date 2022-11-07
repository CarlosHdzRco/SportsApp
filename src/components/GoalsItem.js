import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Image, Segment, Label, Statistic, Icon, Item } from 'semantic-ui-react'
import '../css/StatisticsItem.css'

function GoalsItem({index}) {

    const player = useSelector((state) => state.topGoals.playerList)
    // console.log('player: ',player)
    // console.log('playerIndex: ', player[index])
    // console.log('in StatisticsItem Component')


    if(index === 0){
        return (
            <>
                <Grid.Column className='statsColumn'>
                    <Segment >
                    <Label color='green' attached='top left'>{index+1}</Label>
                        <Statistic.Group className='statsGroup' size='small'>

                            <Statistic className='nameStat'>
                                <Statistic.Value>
                                    <Image src={player[index].player.photo} inline circular />
                                
                                </Statistic.Value>
                                <Statistic.Label>{player[index].player.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='nameLogoStat'>
                                <Statistic.Value>
                                    <Image src={player[index].statistics[0].team.logo} inline />
                                
                                </Statistic.Value>
                                <Statistic.Label>{player[index].statistics[0].team.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='gamesStat'>
                            <Statistic.Value>{player[index].statistics[0].games.appearences}</Statistic.Value>
                            <Statistic.Label>Games</Statistic.Label>
                            </Statistic>

                            <Statistic className='goalsStat'>
                                <Statistic.Value>
                                    <Icon name='soccer' />{player[index].statistics[0].goals.total}
                                </Statistic.Value>
                                <Statistic.Label>Goals</Statistic.Label>
                            </Statistic>

                        </Statistic.Group>
                    
                        
                    </Segment>
                </Grid.Column>
            </>
          )
    }

    if(index === 1 || index === 2){
        return (
            <>
                <Grid.Column className='statsColumn'>
                    <Segment >
                    <Label color='yellow' attached='top left'>{index+1}</Label>
                        <Statistic.Group className='statsGroup' size='small'>

                            <Statistic className='nameStat'>
                                <Statistic.Value>
                                    <Image src={player[index].player.photo} inline circular />
                                
                                </Statistic.Value>
                                <Statistic.Label>{player[index].player.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='nameLogoStat'>
                                <Statistic.Value>
                                    <Image src={player[index].statistics[0].team.logo} inline />
                                
                                </Statistic.Value>
                                <Statistic.Label>{player[index].statistics[0].team.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='gamesStat'>
                            <Statistic.Value>{player[index].statistics[0].games.appearences}</Statistic.Value>
                            <Statistic.Label>Games</Statistic.Label>
                            </Statistic>

                            <Statistic className='goalsStat'>
                                <Statistic.Value>
                                    <Icon name='soccer' />{player[index].statistics[0].goals.total}
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
                                    <Image src={player[index].player.photo} inline circular />
                                
                                </Statistic.Value>
                                <Statistic.Label>{player[index].player.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='nameLogoStat2'>
                                <Statistic.Value>
                                    <Image src={player[index].statistics[0].team.logo} inline />
                                
                                </Statistic.Value>
                                <Statistic.Label>{player[index].statistics[0].team.name}</Statistic.Label>
                            </Statistic>

                            <Statistic className='goalsStat2'>
                                <Statistic.Value>
                                    <Icon className='soccerIcon' name='soccer' />{player[index].statistics[0].goals.total}
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