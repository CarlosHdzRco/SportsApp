import React from 'react'
import '../css/FormColor.css'

function FormColor({formLetter, index}) {

    if(formLetter === 'W' && index != 4) {
        return (
            <>
            <span className='win'>{formLetter} </span>
            </>
        )
    }
    else if(formLetter === 'L' && index != 4) {
        return (
            <>
            <span className='loss'>{formLetter} </span>
            </>
        )
    }
    else if(formLetter === 'D' && index != 4) {
        return (
            <>
            <span className='draw'>{formLetter} </span>
            </>
        )
    }
    else {
        return
    }
  
}

export default FormColor