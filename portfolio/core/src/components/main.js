import React from 'react'
import './main.css'
import NoorP from './Noor-Profile.jpg'

class Main extends React.Component{
    
render(){
    return (
        <div className='main'>
        <div className='side1'>
            <img src = {NoorP} height="800" ></img >
        </div>
        <div className='side2'>
            
        </div>
        </div>
    )
}
}


export default Main