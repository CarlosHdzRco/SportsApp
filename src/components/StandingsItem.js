import React from 'react'
import { Image, Table} from 'semantic-ui-react'
import '../css/StandingsItem.css'


function StandingsItem({teamObj}) {
    console.log(teamObj)
  return (
    <>
        <Table.Row>
            <Table.Cell className='teamColumn'>
                <div className='teamRank'>
                    {teamObj.rank}
                </div>
                
                <div className='teamInfo'>
                    <Image className='logoImg' src={teamObj.team.logo}/>
                    {teamObj.team.name}
                </div>
                
            </Table.Cell>
            <Table.Cell>{teamObj.all.played}</Table.Cell>
            <Table.Cell>{teamObj.all.win}</Table.Cell>
            <Table.Cell>{teamObj.all.draw}</Table.Cell>
            <Table.Cell>{teamObj.all.lose}</Table.Cell>
            <Table.Cell>{teamObj.all.goals.for}</Table.Cell>
            <Table.Cell>{teamObj.all.goals.against}</Table.Cell>
            <Table.Cell>{teamObj.goalsDiff}</Table.Cell>
            <Table.Cell>{teamObj.points}</Table.Cell>
            <Table.Cell>{teamObj.form}</Table.Cell>

        </Table.Row>
    </>
  )
}

export default StandingsItem