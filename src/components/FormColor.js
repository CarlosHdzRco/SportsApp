import React from 'react'
import '../css/FormColor.css'

function FormColor({formLetter}) {

    if(formLetter === 'W') {
        return (
            <>
            <span className='win'>{formLetter} </span>
            </>
        )
    }
    else if(formLetter === 'L') {
        return (
            <>
            <span className='loss'>{formLetter} </span>
            </>
        )
    }
    else if(formLetter === 'D') {
        return (
            <>
            <span className='draw'>{formLetter} </span>
            </>
        )
    }
  
}

export default FormColor