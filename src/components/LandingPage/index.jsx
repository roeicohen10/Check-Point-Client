import React, { useState } from "react";
import { Redirect } from "react-router";
import styles from "./styles.module.scss";
import { register, login } from "../../api/Auth";
import MainPage from '../MainPage'
const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [status, setStatus] = useState("Working");
  const [authSucceeded, setAuthSucceeded] = useState(false);

  const handleAuth = async () => {
    if(!isLogin){
      const user = await register(email, fullname, status);
      if(user) {setAuthSucceeded(true)}
    }
    else{
      console.log(email)
      const user = await login(email);
      if(user){setAuthSucceeded(true)}
    }
  };

  const isLoggedIn = localStorage.getItem('UserMail')


  if(authSucceeded || isLoggedIn){
      return <MainPage />
  }
  return (
    <div>
      {isLogin ? (
        <div>
          <h1>Welcome to MyWorkStatus</h1>
          <h2>You are at the Login page</h2>
          <div className={styles.row}>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="enter your email here..."
            />
            <button onClick={handleAuth}>LOGIN</button>
          </div>
          <button
            onClick={() => setIsLogin(false)}
            className={styles.registerBtn}
          >
            Register instead
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome to MyWorkStatus</h1>
          <h2>You are at the Register page</h2>
          <div className={styles.formArea}>
            <div className={styles.formRow}>
              <label>E-Mail</label>
              <input
                className={styles.registerInput}
                placeholder="enter your email here..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={styles.formRow}>
              <label>Fullname</label>

              <input
                className={styles.registerInput}
                placeholder="enter your full-name here..."
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </div>
            <div className={styles.formRow}>
              <label>Status</label>
              <select
          className={styles.registerInput}
        >
          <option value="Working" onChange={() => setStatus("Working")}>
            Working
          </option>
          <option value="On Vacation" onChange={() => setStatus("On Vacation")}>
            On Vacation
          </option>
          <option value="Business Trip" onChange={() => setStatus("Business Trip")}>
            Buisness Trip
          </option>
          <option value="Lunch Time" onChange={() => setStatus("Lunch Time")}>
            Lunch Time
          </option>
        </select>
            </div>
          </div>
          <div className={styles.formArea}>
            <button onClick={handleAuth}>REGISTER</button>

            <button
              onClick={() => setIsLogin(true)}
              className={styles.registerBtn}
            >
              Login instead
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
