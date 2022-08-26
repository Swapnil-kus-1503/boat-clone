import {
  Box,
  Button,
  Container,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/Cart.module.css";

const Cart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  useEffect(() => {
    setError(false);
    setLoading(true);
    axios({
      url: `http://localhost:8080/cart`,
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setCartProducts(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, [page]);

  useEffect(() => {
    setSearchParams({
      page,
    });
  }, [page, setSearchParams]);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <SimpleGrid
        className={styles.container}
        columns={[1, 2, 2, 4]}
        spacing={"5rem"}
      >
        {cartProducts.map((item) => (
          <Box>
            <Stack
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              className={styles.containerStack}
            >
              <Stack>
                <Img
                  boxSize={"200px"}
                  src={item.image}
                  alignContent={"center"}
                />
                <Text>{item.name}</Text>
                <Text>{item.category}</Text>
                <Text>{`₹ ${item.price}`}</Text>
              </Stack>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};
export default Cart;
