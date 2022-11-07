import React from 'react'
import '../css/Rank.css'

function Rank({rank, descr}) {
    console.log('descr: ', descr)

    if(descr == null) {
        return (
            <div>
                {rank}
            </div>
        )
    }
    else if(descr.substring(0,28) === "Promotion - Champions League") {
        return (
            <div className='championsLeague'>
                {rank}
            </div>
        )
    }
    else if(descr.substring(0,25) === "Promotion - Europa League") {
        return (
            <div className='europaLeague'>
                {rank}
            </div>
        )
    }
    else if(descr.substring(0,1) === "R") {
        return (
            <div className='relegation'>
                {rank}
            </div>
        )
    }
    else {
        return (
            <div>
                {rank}
            </div>
        )
    }
  
}

export default Rank