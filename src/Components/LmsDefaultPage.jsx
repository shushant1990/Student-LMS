import React from "react";
import style from "./LmsDefaultPage.module.css";
import ReactPlayer from "react-player";

const LmsDefaultPage = () => {
  return (
    <>
      {/* <h2>"Enhance your learning experience with our comprehensive video tutorials, designed to help you master new skills at your own pace</h2> */}

      <section className={style["lms-page"]}>
        <h1 className={style["LMS-heading"]}>About LMS</h1>
        <ul className={style["lms-ul"]}>
          <li>   "  A Learning Management System (LMS) is a software application or
          web-based technology used to plan, implement, and assess a specific
          learning process.</li>
       
        <li> 
          "A Learning Management System (LMS) is a software platform that
          facilitates the administration, documentation, tracking, reporting,
          and delivery of educational courses or training programs."
          </li>
        </ul>
        <div className={style["video-container"]}>
          <ReactPlayer url="https://youtu.be/ezbJwaLmOeM?si=IsQfRFUEewWuamRZ"/>
        </div>
      </section>
    </>
  );
};

export default LmsDefaultPage;
