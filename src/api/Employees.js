import axios from "axios";

export const getAllEmployees = async () => {
  try {
    const employees = await axios.post("http://localhost:3002/employees");
    console.log(employees);
    return employees;
  } catch (e) {
    console.log(e.message);
  }
};

export const searchByName = async (fullname) => {
  try {
    if (!fullname) {
      const employees = await axios.post("http://localhost:3002/employees");
      console.log(employees);
      return employees;
    }
    const employees = await axios.post(
      "http://localhost:3002/employees/searchByName",
      { fullname }
    );
    return employees;
  } catch (e) {
    console.log(e.message);
  }
};

export const searchByStatus = async (status) => {
    try {
      if (!status) {
        const employees = await axios.post("http://localhost:3002/employees");
        console.log(employees);
        return employees;
      }
      const filteredEmployees = await axios.post(
        "http://localhost:3002/employees/searchByStatus",
        { status }
      );
      return filteredEmployees;
    } catch (e) {
      console.log(e.message);
    }
  };
  
  export const updateStatus = async (email, status) => {
      console.log(status, email)
      try{
          if(!status) return
          const updatedEmployee = await axios.put('http://localhost:3002/me', {email, status})
          console.log(updatedEmployee)
          return updatedEmployee
      } catch(e){console.log(e.message)}
  }