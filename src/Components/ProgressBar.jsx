import React from 'react'
import style from './ProgressBar.module.css'

const ProgressBar = () => {
  return (
<>
<section className={style["progress-bar-section"]}>
 <div className={style["display-status"]}>
    <h2 className={style["heading-mern"]}>MERN STACK</h2>
    <div className={style["fee-progress"]}  > 
    <p className={style["para-fee-progress"]}>Remanining Fee</p>
    <p className={style["para-fee-progress"]}>Your Progress</p>
    </div>
    <div className={style["meter-bar"]}>
   
    </div>
    <p className={style["percentage-progress"]}>100% Complete</p>
    <p className={style["reg-date"]}>
        Registered on: {new Date().toDateString()}
    </p>
 </div>
</section>
</>
  )
}

export default ProgressBar