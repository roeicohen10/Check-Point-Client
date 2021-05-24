import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import {
  getAllEmployees,
  searchByName,
  searchByStatus,
  updateStatus,
} from "../../api/Employees";
import Employee from "../Employee";
const MainPage = () => {
    const userMail = localStorage.getItem('UserMail')
  const userFullname = localStorage.getItem("UserFullname");
  const userStatus = localStorage.getItem("UserStatus");
  const [status, setStatus] = useState();
  const [myStatus, setMyStatus] = useState(userStatus);

  const [employees, setEmployees] = useState(null);
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    getAllEmployees().then((allEmployees) =>
      setEmployees(allEmployees.data.employees)
    );
  }, []);

  const handleSearchByName = () => {
    searchByName(fullname).then((allEmployees) => {
      console.log(allEmployees);
      setEmployees(allEmployees.data.filteredUsers);
    });
  };
  const handleSearchByStatus = () => {
    searchByStatus(status).then((allEmployees) => {
      console.log(allEmployees);
      setEmployees(allEmployees.data.filteredUsers);
    });
  };
  const handleUpdateStatus = () => {
      console.log('1')
    updateStatus(userMail, myStatus).then((employee) => {
        console.log(employee);
        localStorage.setItem('UserStatus', employee.data.updatedEmployee.status)
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>
        Welcome {userFullname} you are {myStatus}
      </h1>
      <div className={styles.statusContainer}>
        <h3 className={styles.statusHeadline}>Update My Current Status:</h3>
        <select
          className={styles.registerInput}
          onChange={(e) => setMyStatus(e.target.value)}
          value={myStatus}
        >
          <option>Search By Status</option>
          <option value="Working">Working</option>
          <option value="On Vacation">On Vacation</option>
          <option value="Business Trip">Buisness Trip</option>
          <option value="Lunch Time">Lunch Time</option>
        </select>
        <button onClick={handleUpdateStatus}>update</button>
      </div>
      <div className={styles.mainPageBody}>
        <h4>List Of Employees:</h4>
        <div className={styles.filters}>
          <div>
            <input
              placeholder="search by name"
              onChange={(e) => setFullname(e.target.value)}
            />
            <button onClick={handleSearchByName}>search</button>
          </div>
          <div>
            <select
              className={styles.registerInput}
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option>Search By Status</option>
              <option value="Working">Working</option>
              <option value="On Vacation">On Vacation</option>
              <option value="Business Trip">Buisness Trip</option>
              <option value="Lunch Time">Lunch Time</option>
            </select>
            <button onClick={handleSearchByStatus}>search</button>
          </div>
        </div>
        <div className={styles.employeesContainer}>
          {employees &&
            employees.map((employee) => (
              <Employee name={employee.fullname} status={employee.status} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
