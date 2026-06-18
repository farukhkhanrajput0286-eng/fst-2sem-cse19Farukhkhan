//   import React,{useState,useEffect} from "react";
//   function App(){
//     const[formData,setFormData]=useState({
//         name:"",
//         email:"",
//         password:""
 
//     });
//     // useEffect
//     useEffect(()=>{
//         console.log("form successfully updated",formData)

//     },[formData])
    
//     // 

//   }
import React, { useState, useEffect } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Handle Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Registration Successful ✨");

    console.log(formData);

  };

  return (

    <div style={styles.container}>

      <form onSubmit={handleSubmit} style={styles.form}>

        <h1 style={styles.heading}>
          Welcome
        </h1>

        <p style={styles.subHeading}>
          Create your account beautifully 
        </p>

        {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Password */}

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Register
        </button>

      </form>

    </div>
  );
};

// Light Attractive CSS

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to right, #fdfbfb, #ebedee)",
    fontFamily: "'Poppins', sans-serif",
  },

  form: {
    width: "380px",
    background: "#ffffff",
    padding: "40px",
    borderRadius: "25px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  heading: {
    textAlign: "center",
    fontSize: "42px",
    color: "#444",
    marginBottom: "5px",
    fontWeight: "700",
    letterSpacing: "1px",
  },

  subHeading: {
    textAlign: "center",
    color: "#777",
    fontSize: "15px",
    marginBottom: "10px",
  },

  input: {
    padding: "15px",
    borderRadius: "14px",
    border: "1px solid #e0e0e0",
    background: "#f8f9fc",
    fontSize: "16px",
    outline: "none",
    transition: "0.3s",
    color: "#444",
  },

  button: {
    padding: "15px",
    borderRadius: "14px",
    border: "none",
    background:
      "linear-gradient(to right, #89f7fe, #66a6ff)",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    letterSpacing: "1px",
    boxShadow: "0 6px 15px rgba(102,166,255,0.3)",
  },

};

export default App;