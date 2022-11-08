import React from 'react'
import '../css/Rank.css'

function Rank({rank, descr}) {

    //description has no content
    if(descr == null) {
        return (
            <div>
                {rank}
            </div>
        )
    }
    //team rank is in champions league position
    else if(descr.substring(0,28) === "Promotion - Champions League") {
        return (
            <div className='championsLeague'>
                {rank}
            </div>
        )
    }
    //team rank is in europa league position
    else if(descr.substring(0,25) === "Promotion - Europa League") {
        return (
            <div className='europaLeague'>
                {rank}
            </div>
        )
    }
    //team rank is in relegation position
    else if(descr.substring(0,1) === "R") {
        return (
            <div className='relegation'>
                {rank}
            </div>
        )
    }
    //some cases that I didnt catch just return normal rank
    else {
        return (
            <div>
                {rank}
            </div>
        )
    }
  
}

export default Rank