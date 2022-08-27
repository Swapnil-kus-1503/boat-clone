import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/Login.module.css";

const Checkout = () => {
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    address: "",
  });
  const Navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Deatils Submitted");
    Navigate("/payment");
  }
  return (
    <div>
      <div style={{ background: "#252525", color: "#ffffff" }}>
        <div className={styles.container}>
          <h1
            style={{
              marginLeft: "1rem",
              fontSize: "45px",
              marginBottom: "1rem",
            }}
          >
            Enter Details
          </h1>
          <form onSubmit={handleSubmit}>
            <Flex direction={"column"} gap="1rem">
              <Box>
                <input
                  className={styles.input}
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="E-MAIL"
                  name="email"
                />
              </Box>

              <Box>
                <input
                  className={styles.input}
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="FULL NAME"
                  name="name"
                  type="text"
                />
              </Box>
              <Box>
                <input
                  className={styles.input}
                  value={formState.address}
                  onChange={handleChange}
                  placeholder="ADDRESS"
                  name="address"
                  type="text"
                />
              </Box>
              <Box>
                <input type="checkbox" value="Remember Me" />{" "}
                <label>Remember Me</label>
              </Box>
              <Box>
                <Link to ="/payment">
                <Button
                  className={styles.button}
                  background={"#fe161f"}
                  color={"#ffffff"}
                  textTransform="uppercase"
                  type="submit"
                  value="Sign In"
                >
                  SUBMIT
                </Button></Link>
               
              </Box>
            </Flex>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
