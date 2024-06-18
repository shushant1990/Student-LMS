import React, { useState } from "react";
import style from "./ShowTranscation.module.css";

const tableAry = [
  {
    course: "MERN STACK",
    payment: "Payment",
    transacation: "TRANSACTION ID",
    amount: "Rs 1000",  
  },
  {
    course: "FRONT END DEVELOPMENT",
    payment: "Payment",
    transacation: "TRANSACTION ID",
    amount: "Rs 1000",  
  },
  {
    course: "UI & UX ",
    payment: "Payment",
    transacation: "TRANSACTION ID",
    amount: "Rs 1000",  
  },
  {
    course: "GRAPHIC DESIGN",
    payment: "Payment",
    transacation: "TRANSACTION ID",
    amount: "Rs 1000",  
  },
 
];

const ShowTranscation = () => {
  const [tabelData, setTabelData] = useState(tableAry);

  return (
    <>
      <div className={style["show-transaction-history"]}>
        <table className={style["table"]}>
          <thead>
            <tr>
              <th>COURSE</th>
              <th>PAYMENT VIA</th>
              <th>TRANSACATION ID</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          {tabelData.map((curElm) => {
            // const{course,payment,transacation,amount,mern}=curElm;
            return (
              <>
                <tr key={curElm} className={style["data-table-row"]}>
                  <td className={style["course"]}>{curElm.course}</td>
                  <td>{curElm.payment}</td>
                  <td>{curElm.transacation}</td>
                  <td>{curElm.amount}</td>
                </tr>
              </>
            );
          })}{" "}
        </table>
      </div>
    </>
  );
};

export default ShowTranscation;
