import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Componets/Footer";
import { AuthContext } from "../Context/AuthContext";
import styles from "../Styles/Login.module.css";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        // console.log(res);
        auth.handleLogin(res.token);
        navigate("/dailydeals");
      })
      .catch((err) => {});
  }
  return (
    <div style={{background:"#252525", color:"#ffffff"}}>
        
    <div className={styles.container} >
    <h1 style={{marginLeft:"1rem",fontSize:"45px",marginBottom:"1rem"}}>Login</h1>
      <form onSubmit={handleSubmit}>
        <Flex direction={"column"} gap="1rem">
          <Box>
            <input
              className={styles.input}
              value={formState.email}
              onChange={handleChange}
              placeholder="Username"
              name="email"
            />
          </Box>

          <Box>
            <input
              className={styles.input}
              value={formState.password}
              onChange={handleChange}
              placeholder="Password"
              name="password"
              type="password"
            />
          </Box>
          <Box>
            <input type="checkbox" value="Remember Me" />{" "}
            <label>Remember Me</label>
          </Box>
          <Box>
            <Button
              className={styles.button}
              background={"#fe161f"}
              color={"#ffffff"}
              textTransform="uppercase"
              type="submit"
              value="Sign In"
            >
                Login
            </Button>
          </Box>
          <Box>
            <Text marginTop="5rem" marginLeft="2rem">New Customer ?  {" "}Create An Account</Text>
          </Box>
        </Flex>
      </form>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Login;
