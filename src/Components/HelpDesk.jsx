import React, { useState } from 'react'
import style from './HelpDesk.module.css'


const HelpDesk = () => {
const[file,setFile]=useState(null)
const handelImage=(e)=>{
    const selectedImage=e.target.files[0]
    setFile(selectedImage)
}

  return (
    <>

    <div className={style["help-desk-container"]}>
<h1 className={style["encountering-issue-heading"]}>Encountering Issues?</h1>
<p className={style["para-issue"]}>Your Issue is Related to</p>

<div className={style["tech-issue-container"]}>
    <div className={style["choose-issue-one"]}>
        <div><img src="../public/images/technical issue.png" alt="" /></div>
    <div className={style["text-lms"]}>LMS</div>
    </div>
    <div className={style["choose-issue-two"]}>
    <div><img src="../public/images/account issue.png" alt="" /></div>
    <div className={style["text-your-account"]}>Your Account</div>
    </div>
</div>
<p className={style["describe-issue"]}>Describe Your Issue </p>

<div className={style["describe-issue-container"]}>
<div className={style["text-area"]}>
<textarea className={style["textarea-input"]} placeholder='Please write Your Issue'></textarea>
</div>
</div>



<div className={style["images-upload"]}> 
<input type="file"  accept='image' onChange={handelImage} />
{file && <img src={URL.createObjectURL(file)} />}
</div>
</div>

    </>
  )
}

export default HelpDesk