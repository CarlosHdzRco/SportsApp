import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Image, Segment } from 'semantic-ui-react'
import '../css/StatisticsItem.css'

function StatisticsItem({index}) {

    // const player = useSelector((state) => state.statistics.playerList[index].player)
    // console.log(player)

    if(index === 0){
        return (
            <>
                <Grid.Column className='statsColumn'>
                    {/* <Image src={player.photo} /> */}
                    
                    <Segment><Image className='playerPicTop' src='https://react.semantic-ui.com/images/wireframe/image.png' /></Segment>
                </Grid.Column>
            </>
          )
    }

    if(index === 1 || index === 2 || index === 3){
        return (
            <>
                <Grid.Column className='statsColumn'>
                    {/* <Image src={player.photo} /> */}
                    <Segment><Image className='playerPicSecond' src='https://react.semantic-ui.com/images/wireframe/image.png' /></Segment>

                </Grid.Column>
            </>
          )
    }

    else {
        return (
            <>
                <Grid.Column className='statsColumn'>
                    {/* <Image src={player.photo} /> */}
                    <Segment><Image className='playerPicRest' src='https://react.semantic-ui.com/images/wireframe/image.png' /></Segment>

                </Grid.Column>
            </>
          )
    }

}

export default StatisticsItem