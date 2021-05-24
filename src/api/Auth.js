import axios from "axios";

export const register = async (email, fullname, status = "Working") => {
  try {
    const newUser = await axios.post("http://localhost:3002/register", {
      email,
      fullname,
      status,
    });
    const userMail = newUser.data.user.email;
    const userFullname = newUser.data.user.fullname;
    const userStatus = newUser.data.user.status;

    localStorage.setItem("UserMail", userMail);
    localStorage.setItem("UserFullname", userFullname);
    localStorage.setItem("UserStatus", userStatus);

    return newUser;
  } catch (e) {
    console.log(e.message);
  }
};

export const login = async (email) => {
  try {
    const loggedUser = await axios.post("http://localhost:3002/login", {
        email,
    });
    console.log(loggedUser);
    const { fullname, status } = loggedUser.data.user;

    localStorage.setItem("UserMail", loggedUser.data.user.email);
    localStorage.setItem("UserFullname", fullname);
    localStorage.setItem("UserStatus", status);

    return loggedUser;
  } catch (e) {
    console.log(e.message);
  }
};
