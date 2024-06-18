import React, { useState } from 'react'
import style from './NavBar.module.css'
import { FaChevronDown } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import Notification from './Notification';
import StudentProfile from './StudentProfile';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const NavBar = () => {
    const[notification,setNotifivation]=useState(false)
    const removeNotification=()=>{
        setNotifivation(!notification)
    }

const[studentProfile,setStudentProfile]=useState(false)
const removeStudentProfile=()=>{
    setStudentProfile(!studentProfile)
}

const[logout,setLogout]=useState(false)
const showLogout=()=>{
    setLogout(true)
}
const remLogout=()=>{
    setLogout(!logout)
}

const date=new Date().getHours()
let greet=""
let cssStyle={}

if(date>1 && date<12){
greet ="Good Morning"
cssStyle.color="green"

}
else if(date>=12 && date<16){
    greet="Good Afternoon"
    cssStyle.color="red"
}
else if(date>=16 && date<20){
    greet="Good Evening"
    cssStyle.color="orange"
}
else{
    greet="Good Night"
     cssStyle.color="black"
}




  return (
    <>
    <header className={style["header"]}>
        
        <nav className={style["nav-bar"]}>
        <Link to="/" className={style["link"]}> 
        <div className={style["brillica-logo"]}>
            <img src="../public/images/BSlogo.jpg" alt="logo" />
        </div>

        </Link>

        {/********* notification bar *************/}
        <div  className={style["bellicon"]}onClick={()=>setNotifivation(true)}>
<IoIosNotificationsOutline/>
        </div>

 {/**********student profile section **********/}
 <div className={style["student-profile"]} onClick={()=>setStudentProfile(true)} >
    <span className={style["s"]}>S</span>
    <span className={style["hi-name"]}>Hi ,Shushant  <span style={cssStyle}>{greet}</span> </span>

    <span><FaChevronDown/></span>
   
 </div>
    </nav>
    </header>
    {notification && <Notification removeNotification={removeNotification}/>}

    {studentProfile && <StudentProfile removeStudentProfile={removeStudentProfile} showLogout={showLogout}/>}

    {logout && <Logout remLogout={remLogout} />}
    </>
  )
}

export default NavBar