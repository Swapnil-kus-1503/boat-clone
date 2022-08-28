import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../Componets/Footer";
import { AuthContext } from "../Context/AuthContext";
import styles from "../Styles/Login.module.css";

const Payment = () => {
  const [formState, setFormState] = useState({
    card: "",
    name: "",
    cvv: "",
    otp: "",
  });

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
    alert("Order Placed Successful !");
    navigate("/dailydeals");
  }
  return (
    <div style={{ background: "#252525", color: "#ffffff" }}>
      <div className={styles.container}>
        <h1
          style={{ marginLeft: "1rem", fontSize: "45px", marginBottom: "1rem" }}
        >
          Payment
        </h1>
        <form onSubmit={handleSubmit}>
          <Flex direction={"column"} gap="1rem">
            <Box>
              <input
                className={styles.input}
                value={formState.card}
                onChange={handleChange}
                placeholder="ENTER 16 CARD NUMBER"
                name="card"
                type="number"
              />
            </Box>

            <Box>
              <input
                className={styles.input}
                value={formState.name}
                onChange={handleChange}
                placeholder="CARD HOLDER NAME"
                name="name"
                type="text"
              />
            </Box>

            <Box>
              <input
                className={styles.input}
                value={formState.cvv}
                onChange={handleChange}
                placeholder="ENTER CVV NUMBER"
                name="cvv"
                type="password"
              />
            </Box>
            <Box>
              <input
                className={styles.input}
                value={formState.cvv}
                onChange={handleChange}
                placeholder="ENTER 6-DIGIT NUMBER"
                name="otp"
                type="password"
              />
            </Box>

            <Box>
              <input type="checkbox" value="Remember Me" />{" "}
              <label>Save Card Details</label>
            </Box>
            <Box>
              <Button
                width={"250px"}
                className={styles.button}
                background={"#fe161f"}
                color={"#ffffff"}
                textTransform="uppercase"
                type="submit"
                value="Sign In"
              >
                Confirm Your Order !
              </Button>
            </Box>
            <Box>
              <Link to="/dailydeals">
                <Button
                  width={"250px"}
                  className={styles.button}
                  background={"#fe161f"}
                  color={"#ffffff"}
                  textTransform="uppercase"
                  type="submit"
                  value="Sign In"
                >
                  CONTINUE SHOPPING
                </Button>
              </Link>
            </Box>
          </Flex>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Payment;
