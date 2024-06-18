import React from 'react'
import style from './Logout.module.css'


const Logout = ({remLogout}) => {
  

  return (
   <>
   <div className={style["logout-parent"]}>

    <div className={style["logout-child"]}>
        <div className={style["question-mark"]}>?</div>
        <div className={style["sure"]}>Are you want to logout</div>
        <button className={style["logout-ok"]}>Ok</button>

    <button className={style["logout-cancel"]} onClick={remLogout}>Cancel</button>

    </div>
   </div>
   </>
  )
}

export default Logout