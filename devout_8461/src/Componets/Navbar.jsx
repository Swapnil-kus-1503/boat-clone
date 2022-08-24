import { Box, Flex, Image } from "@chakra-ui/react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Box className={styles.heading}>
        <h3>All your boAt products at Heavy Bargains. Shop NOW!</h3>
      </Box>
      <div className={styles.container}>
        <Flex>
        <Box>
          <Link to="/">
            <Image
              className={styles.headerlogo}
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229"
              style={{ width: "100px", height: "40px" }}
            />
          </Link>
        </Box>

        <Flex>
        <Box>
            <Link to="/shop">
              <h3>
                Shop{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
          <Box>
            <Link to="/dailydeals">
              <h3>
                Daily Deals{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
          <Box>
            <Link to="/offerzone">
              <h3>
                Offer Zone{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
          <Box>
            <Link to="/more">
              <h3>
                More{" "}
                <TriangleDownIcon style={{ color: "#4296cb", width: "10px" }} />
              </h3>
            </Link>
          </Box>
        </Flex>
        </Flex>
      </div>
    </div>
  );
}

export default Navbar;
