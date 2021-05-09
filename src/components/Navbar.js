import React , {useState} from 'react'
import Logo from '../img/Logo.svg'
import loupe from '../img/loupe.svg'
import './Navbar.css'
function Navbar(props) {

   console.log(props);

    return (
        <div className = "Navbar_container">
            <div className = "Navbar_Logo_cnt">
                <img className = "Navbar_logo" src = {Logo}></img> 
            </div>
                
           <div className = "Navbar_search">
                <input onChange = {(e) => {props.inputSearch(e.target.value)  }} placeholder = "Type your city..." ></input>
                <button onClick = {() => props.buttonClick() }><img className = "Navbar_loupe" src = {loupe}></img> </button>
           </div>
        
           
        </div>
    )
}

export default Navbar
