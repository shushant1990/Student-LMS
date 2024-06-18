import React from 'react'
import style from './AsideBar.module.css'
 import {Link} from 'react-router-dom'


const AsideBar = () => {
  return (
 <>
 <div className={style["aside-bar-container"]} 
 
 
 
 >


<Link to='/ProgressBar'> 
<div className={style["student-batch"]}>
<span class="material-symbols-outlined">
folder_shared
</span>
<span>Student Batch</span>
</div>
 </Link>

<div className={style["test-module"]}>
<span class="material-symbols-outlined">
cards
</span>
<span>Test Module</span>
</div>


<Link to='/payment'> 
 <div className={style["payment"]}>
 <span class="material-symbols-outlined">
currency_rupee
</span>
<span>Payment</span>
</div>
</Link>
</div>
 </>
  )
}

export default AsideBar