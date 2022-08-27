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
import { Link, useSearchParams } from "react-router-dom";
import styles from "../Styles/Cart.module.css";

const Cart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleGetCart();
  }, [page]);

  const handleGetCart = () => {
    setError(false);
    setLoading(true);
    axios
      .get("http://localhost:8080/cart")
      .then((res) => {
        setLoading(false);

        console.log(res);
        setCartProducts([...res.data]);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };
  useEffect(() => {
    setSearchParams({
      page,
    });
  }, [page, setSearchParams]);

  const deleteData = (id) => {
    return fetch(`http://localhost:8080/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json();
    });
  };

  const handleDelete = (id) => {
    setLoading(true);
    deleteData(id)
      .then((res) => {
        handleGetCart();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

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
        {cartProducts &&
          cartProducts.map((item) => (
            <Box id={item.id}>
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
                  <Text textDecoration={"line-through"}>
                    Original Price: {`₹ ${item.stkPrice}`}
                  </Text>
                  <Text>Special Price: {`₹ ${item.price}`}</Text>
                  <Text>Discount: {item.off}</Text>
                </Stack>
                <Button
                  background={"#fe161f"}
                  className={styles.remove}
                  onClick={() => handleDelete(item.id)}
                >
                  Remove
                </Button>
              </Stack>
            </Box>
          ))}
      </SimpleGrid>
      <Container>
        <Link to="/checkout">
          <Button marginTop={"3rem"} marginBottom={"3rem"} width={"200px"} background={"#fe161f"} className={styles.remove}>
            Proceed To Checkout
          </Button>
        </Link>
      </Container>
    </div>
  );
};
export default Cart;
