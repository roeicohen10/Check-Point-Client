import React from "react";
import styles from './styles.module.scss'
const Employee = ({ name, status }) => {
  const isVacation = (status=="On Vacation")
  return (
    <div>
      <div className={styles.container}>
        <span>{name}</span>
        {isVacation ? (
          <span className={styles.vacationStatus}>{status}</span>
        ): (
          <span className={styles.regularStatus}>{status}</span>
        )}
      </div>
    </div>
  );
};

export default Employee;
