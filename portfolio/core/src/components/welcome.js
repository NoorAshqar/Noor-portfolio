import React from 'react'
import './welcome.css'
import NoorP from './Noor-Profile.jpg'
import { Link } from "react-router-dom";
class Welcome extends React.Component{
    componentDidMount(){
        var i=0,y=0,z=0;
        var typing=()=>{
            var text2 = "My awakening brings a new age"
            var text3 = "Pray to your gods, that your pleas may go unanswered."
            var text1 = "Noor Aldeen Ashqar"
            var text4 = "Learn More"
                if (i < text1.length) {
                    document.getElementById("Name1").innerHTML += text1.charAt(i);
                    i++
                    setTimeout(typing,50)
                }
                if(i===text1.length && y<text2.length){
                    document.getElementById("Name2").innerHTML += text2.charAt(y);
                    y++
                    setTimeout(typing,50)
                }
                if(y===text2.length && z<text3.length){
                    document.getElementById("Name3").innerHTML += text3.charAt(z);
                    z++
                    setTimeout(typing,50)
                }
                if(z===text3.length){
                    document.getElementById("goToMainPage").innerHTML = text4
                }
            }
        typing()
        }
    render(){
        return (
        <div className='main'>
        <div className='side1'>
            <img src = {NoorP} height="800" ></img >
        </div>
        <div className='side2'>
            <h1 id = "Name1">
            </h1>
            <h2 id = "Name2"></h2>
            <h2 id = "Name3"></h2>
            <Link
                                to='/wwaw'
                                ><button id = "goToMainPage" onClick={()=>{document.body.style.backgroundImage = "none"}}></button></Link>
        </div>
        </div>
    )
}
}


export default Welcome