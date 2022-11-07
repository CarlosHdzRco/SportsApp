import React from 'react'
import { Table } from 'semantic-ui-react'
import '../css/TableHeader.css'

function TableHeader() {
  return (
    <>
        <Table.Header className='standingsHeader'>
            <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>
                <Table.HeaderCell>GP</Table.HeaderCell>
                <Table.HeaderCell>W</Table.HeaderCell>
                <Table.HeaderCell>D</Table.HeaderCell>
                <Table.HeaderCell>L</Table.HeaderCell>
                <Table.HeaderCell>GF</Table.HeaderCell>
                <Table.HeaderCell>GA</Table.HeaderCell>
                <Table.HeaderCell>GD</Table.HeaderCell>
                <Table.HeaderCell>PTS</Table.HeaderCell>
                <Table.HeaderCell>FORM</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    </>
  )
}

export default TableHeader