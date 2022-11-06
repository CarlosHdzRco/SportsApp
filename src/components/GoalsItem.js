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
                        <div className='statsFlex'>
                            <Image circular className='playerPicTop' src={player[index].player.photo} />
                            <Statistic.Group size='huge'>

                                <Statistic>
                                    <Statistic.Value>
                                        <Image src={player[index].statistics[0].team.logo} inline />
                                    
                                    </Statistic.Value>
                                    <Statistic.Label>{player[index].player.name}</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                <Statistic.Value>{player[index].statistics[0].games.appearences}</Statistic.Value>
                                <Statistic.Label>Games</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value>
                                        <Icon name='soccer' />{player[index].statistics[0].goals.total}
                                    </Statistic.Value>
                                    <Statistic.Label>Goals</Statistic.Label>
                                </Statistic>
                                
                            </Statistic.Group>
                        </div>
                        
                    </Segment>
                </Grid.Column>
            </>
          )
    }

    if(index === 1 || index === 2 || index === 3 || index === 4){
        return (
            <>
                <Grid.Column className='statsColumn'>
                    {/* <Image src={player.photo} /> */}
                    <Segment>
                        <Label color='yellow' attached='top left'>{index+1}</Label>
                        <div className='statsFlex'>
                        <Image circular className='playerPicSecond' src={player[index].player.photo} />
                        <Statistic.Group>

                        <Statistic>
                            <Statistic.Value>
                                <Image src={player[index].statistics[0].team.logo} inline />
                            
                            </Statistic.Value>
                            <Statistic.Label>{player[index].player.name}</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>{player[index].statistics[0].games.appearences}</Statistic.Value>
                            <Statistic.Label>Games</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>
                                <Icon name='soccer' />{player[index].statistics[0].goals.total}
                            </Statistic.Value>
                            <Statistic.Label>Goals</Statistic.Label>
                        </Statistic>

                        </Statistic.Group>
                        </div>
                    </Segment>

                </Grid.Column>
            </>
          )
    }

    else {
        return (
            <>
                <Grid.Column className='statsColumn'>
                    {/* <Image src={player.photo} /> */}
                    <Segment>
                        <Label color='red' attached='top left'>{index+1}</Label>
                        
                        <div className='statsFlex'>
                        <Image circular className='playerPicRest' src={player[index].player.photo} />
                        <Statistic.Group size='mini'>

                        <Statistic>
                            <Statistic.Value>
                                <Image src={player[index].statistics[0].team.logo} inline />
                            
                            </Statistic.Value>
                            <Statistic.Label>{player[index].player.name}</Statistic.Label>
                        </Statistic>
                        
                        <Statistic>
                            <Statistic.Value>
                                <Icon name='soccer' />{player[index].statistics[0].goals.total}
                            </Statistic.Value>
                            <Statistic.Label>Goals</Statistic.Label>
                        </Statistic>

                        </Statistic.Group>
                        </div>
                    </Segment>

                </Grid.Column>
            </>
          )
    }

}

export default GoalsItem