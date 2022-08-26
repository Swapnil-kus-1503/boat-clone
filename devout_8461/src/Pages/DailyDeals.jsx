import {
  Box,
  Button,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ModalComponent } from "../Componets/ModalComponents";
import styles from "../Styles/DailyDeals.module.css";

const DailyDeals = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [sortBy, setSortBy] = useState("asc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBBox, setSelectedBox] = useState({});

  const handleAddCart = () => {
    fetch(`http://localhost:8080/cart/`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        data:cartProducts,
      }),
  
    })
      .then((res) => res.json())
      .then((res) => {
        //   console.log(data);
        setProducts([...products, res]);
        setCartProducts(res.data);
      });
  };

  useEffect(() => {
    setError(false);
    setLoading(true);
    axios({
      url: `http://localhost:8080/products?_page=${page}&_limit=8&_sort=price&_order=${sortBy}`,
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, [page, sortBy]);

  useEffect(() => {
    setSearchParams({
      page,
    });
  }, [page, setSearchParams]);

  const handleDetails = (item) => {
    setIsModalOpen(true);
    setSelectedBox(item);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Box className={styles.buttonBox}>
        <Button
          background={"#fe161f"}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          PREV
        </Button>{" "}
        <Button background={"#fe161f"}>{page}</Button>{" "}
        <Button background={"#fe161f"} onClick={() => setPage(page + 1)}>
          NEXT
        </Button>
      </Box>

      <div className={styles.buttonBox} paddingTop="1rem">
        <Button
          background={"#fe161f"}
          onClick={() => setSortBy("asc")}
          disabled={sortBy === "asc"}
        >
          Low To High
        </Button>{" "}
        <Button
          background={"#fe161f"}
          onClick={() => setSortBy("desc")}
          disabled={sortBy === "desc"}
        >
          High To Low
        </Button>
      </div>

      <SimpleGrid
        className={styles.container}
        columns={[1, 2, 2, 4]}
        spacing={"5rem"}
      >
        {products.map((item) => (
          <Box>
            <Stack
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              className={styles.containerStack}
            >
              <Stack onClick={() => handleDetails(item)}>
                <Img
                  boxSize={"200px"}
                  src={item.image}
                  alignContent={"center"}
                />
                <Text>{item.name}</Text>
                <Text>{item.category}</Text>
                <Text>{`₹ ${item.price}`}</Text>
              </Stack>
              <Button
                onClick={handleAddCart}
                background={"#fe161f"}
                className={styles.addToCart}
              >
                ADD TO CART
              </Button>
            </Stack>
          </Box>
        ))}
        <ModalComponent
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          products={selectedBBox}
        />
      </SimpleGrid>
    </div>
  );
};

export default DailyDeals;
