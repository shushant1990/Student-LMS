import React ,{useState}from 'react'
import style from './MainBody.module.css'
import AsideBar from './AsideBar'
import ProgressBar from './ProgressBar'
import HelpDesk from './HelpDesk'
import Payment from './Payment'
import LmsDefaultPage from './LmsDefaultPage'
import {Routes,Route} from'react-router-dom'


const MainBody = () => {


  return (
    <>
    <div className={style["main-body-wrapper"]}>
<AsideBar/>

  <Routes>
    <Route path='/'  element={<LmsDefaultPage/>}/>
     <Route path='/ProgressBar' element={<ProgressBar/>}/> 
    <Route path='/helpDesk' element={<HelpDesk/>}/>
    <Route path='/payment' element={<Payment/>}/>
 

   
 </Routes> 

</div>

    </>
  )
}

export default MainBody