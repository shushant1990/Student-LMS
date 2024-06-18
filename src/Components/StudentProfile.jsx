import React from 'react'
import style from './StudentProfile.module.css'
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

const StudentProfile = ({removeStudentProfile,showLogout}) => {
  return (
  <>
  <div className={style["student-profile-parent"]}>
<div className={style["student-profile-child"]}>
<div className={style["remove-student-profile"]} onClick={removeStudentProfile}> <MdCancel/></div>
<div className={style["student-name-sign"]}>S</div>
<div className={style["student-details"]}>
 <div className={style["student-name"]}>Shushant rana </div>
 <div>persierana11@gmail.com</div>
<div>7906703184</div>
</div>

{/* chat support */}
<div className={style["chat-support"]}>
    <div className={style["chat-icon"]}><IoChatbubblesOutline/></div>
    <div>Chat Support</div>
    <div className={style["right-arrow"]}> <FaChevronRight/></div>
</div>

{/* helpdesk */}
<Link to="/helpDesk" onClick={removeStudentProfile } className={style['link']}>
<div className={style["chat-support"]}>
    <div className={style["chat-icon"]}><IoMdHelp/></div>
    <div>Help Desk</div>
    <div className={style["right-arrow"]}> <FaChevronRight/></div>
</div>
</Link>

{/* logout */}


<div className={style["chat-support"]} onClick={showLogout}>
    <div className={style["chat-icon"]}><IoIosLogOut/></div>
    <div>Logout</div>
    <div className={style["right-arrow"]}> <FaChevronRight/></div>
</div>





</div>
  </div>
  </>
  )
}

export default StudentProfile