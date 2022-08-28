import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Footer.module.css";

const Footer = () => {
  const handleSubmit = () => {
    alert("You have Subscribed Successfully !");
  };
  return (
    <div className={styles.container}>
      <Flex>
        <Box>
          <Link to="/dailydeals">
            <Image
              className={styles.headerlogo}
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229"
              style={{ width: "100px", height: "40px", marginLeft: "2rem" }}
            />
          </Link>
        </Box>
      </Flex>

      <Text marginTop={"1rem"} marginLeft={"-66rem"}>
        Subscribe to email alerts. We promise not to spam your inbox.
      </Text>

      <Flex marginTop={"1rem"}>
        <Box>
          <Input
            width={"20rem"}
            height={"3.5rem"}
            type="email"
            placeholder="Enter E-mail Address*"
          />
        </Box>
        <Box>
          <Button
            fontSize={"1.5rem"}
            textTransform={"uppercase"}
            background={"#fe161f"}
            onClick={handleSubmit}
            marginLeft={"2rem"}
            height={"3.5rem"}
          >
            Subscribe
          </Button>
        </Box>
        <Box>
          <Flex
          className={styles.flex}
            direction={"column"}
            gap="1rem"
            marginLeft={"4rem"}
            marginTop={"-5rem"}
          >
            <Text fontWeight={"bold"}>SHOP</Text>
            <Text>True Wireless Earbud</Text>
            <Text>Wireless Headphone</Text>
            <Text>Wired Headphone</Text>
            <Text>Wireless Speaker</Text>
            <Text>Home Audio</Text>
            <Text>Mobile Accessories</Text>
            <Text>Smart Watches</Text>
            <Text>TRebel</Text>
            <Text>Misfit</Text>
            <Text>Gift Car</Text>
            <Text>Rock In India</Text>
            <Text>Earn Rs.10</Text>
          </Flex>
        </Box>
        <Box>
          <Flex
          className={styles.flex}
            direction={"column"}
            gap="1rem"
            marginLeft={"10rem"}
            marginTop={"-5rem"}
          >
            <Text fontWeight={"bold"}>HELP</Text>
            <Text>Track Your Order</Text>
            <Text>Warranty & Support</Text>
            <Text>Return Policy</Text>
            <Text>Service Centers</Text>
            <Text>Bulk Orders</Text>
            <Text>FAQs</Text>
            <Text>Why Buy Direct</Text>
          </Flex>
        </Box>
        <Box>
          <Flex
          className={styles.flex}
            direction={"column"}
            gap="1rem"
            marginLeft={"10rem"}
            marginTop={"-5rem"}
          >
            <Text fontWeight={"bold"}>Company</Text>
            <Text>About boAt</Text>
            <Text>News</Text>
            <Text>Read Our Blog</Text>
            <Text>Careers</Text>
            <Text>Security</Text>
            <Text>Terms of Service</Text>
            <Text>Privacy Policy</Text>
            <Text>Investor Relations</Text>
            <Text>Social Responsibility</Text>
            <Text>Warranty Policy</Text>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Footer;
