import React, { useState } from "react";
import style from "./Payment.module.css";
import ShowTranscation from "./ShowTranscation";
import UpcomingPayment from "./UpcomingPayment";


const Payment = () => {
  const [show, setShhow] = useState(true);

  return (
    <>
      <section className={style["payment-container"]}>
        <div className={style["payment-details"]}>
          <div
            className={style["show-transaction"]}
            onClick={() => setShhow(!show)}
          >
            Show Transaction History
          </div>

          <div className={style["upcoming-payment"]}>Upcoming</div>
        </div>
      </section>
      {show && <ShowTranscation />}
    </>
  );
};

export default Payment;
