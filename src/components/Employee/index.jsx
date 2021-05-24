import React from "react";
import styles from './styles.module.scss'
const Employee = ({ name, status }) => {
  return (
    <div>
      <div className={styles.container}>
        <span>{name}</span>
        <span>{status}</span>
      </div>
    </div>
  );
};

export default Employee;
