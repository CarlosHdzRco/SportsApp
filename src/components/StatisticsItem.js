import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Image, Segment, Label } from 'semantic-ui-react'
import '../css/StatisticsItem.css'

function StatisticsItem({index}) {

    const player = useSelector((state) => state.statistics.playerList)
    console.log('player: ',player)
    console.log('playerIndex: ', player[index].player.photo)
    console.log('in StatisticsItem Component')


    if(index === 0){
        return (
            <>
                <Grid.Column className='statsColumn'>
                    <Segment>
                    <Label attached='top left'>{index+1}</Label>
                        <Image className='playerPicTop' src={player[index].player.photo} />
                    </Segment>
                </Grid.Column>
            </>
          )
    }

    if(index === 1 || index === 2 || index === 3){
        return (
            <>
                <Grid.Column className='statsColumn'>
                    {/* <Image src={player.photo} /> */}
                    <Segment>
                        <Label attached='top left'>{index+1}</Label>
                        <Image className='playerPicSecond' src={player[index].player.photo} />
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
                        <Label attached='top left'>{index+1}</Label>
                        <Image className='playerPicRest' src={player[index].player.photo} />
                    </Segment>

                </Grid.Column>
            </>
          )
    }

}

export default StatisticsItem