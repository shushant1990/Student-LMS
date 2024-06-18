import React,{useState} from 'react'
import style from './Card.module.css'

let cardAry = [
    {
      img: "../public/images/BSlogo.jpg",
      course: "Mern Stack",
      courseFee: "Rs 30000",
      trainer: "Nitin Bela",
      btn: "View Details",
    },
    {
      img: "../public/images/BSlogo.jpg",
      course: "Digital Marketing ",
      courseFee: "Rs 20000",
      trainer: "Nitin Bela",
      btn: "View Details",
    },
  
    {
      img: "../public/images/BSlogo.jpg",
      course: "Data Analytics",
      courseFee: "Rs 30000",
      trainer: "Nitin Bela",
      btn: "View Details",
    },
  
    {
      img: "../public/images/BSlogo.jpg",
      course: "Data Science",
      courseFee: "Rs 20000",
      trainer: "Vikas Singh",
      btn: "View Details",
    },
    {
      img: "../public/images/BSlogo.jpg",
      course: "Cyber Security",
      courseFee: "Rs 20000",
      trainer: "Ashutosh Raturi",
      btn: "View Details",
    },
    {
      img: "../public/images/BSlogo.jpg",
      course: "SEO",
      courseFee: "Rs 15000",
      trainer: "Shubham Shamra",
      btn: "View Details",
    },
  ];

const Cards = () => {
const [cardData, setCardData] = useState(cardAry);


  return (
    <div className={style["card-container"]}>
    {cardData.map((curElm) => {
      return (
        <div className={style["card-item"]}>
          <div className={style["bs-img"]}>
            <img src={curElm.img} alt="logo" />
          </div>
          <div>Course: {curElm.course} </div>
          <div> Course Fee: {curElm.courseFee}</div>
          <div>Trainer: {curElm.trainer}</div>
          <div className={style["view-details-btn"]} > 
          {curElm.btn}
          </div>
        
        </div>
      );
    })}
  </div>
  )
}

export default Cards