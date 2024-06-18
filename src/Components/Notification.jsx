import React from 'react'
import style from './Notification.module.css'
import { MdCancel } from "react-icons/md";

const Notification = ({removeNotification}) => {
  return (
<>
<div className={style["notification-parent"]}>

<div className={style["notification-child"]}>
<div className={style["notification-wrapper"]}>
<span>Notification</span>
<span className={style["mark-read"]}>Mark As Read</span>
<span className={style["cancel-notification"]} onClick={removeNotification}><MdCancel/></span>
</div>

<div className={style["no-notification"]}>No New Notification</div>
<span></span>
</div>
</div>
</>
  )
}

export default Notification