import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import styles from "../Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { SearchIcon, TriangleDownIcon, ViewIcon } from "@chakra-ui/icons";
import Footer from "./Footer";

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
                style={{ width: "100px", height: "40px", marginLeft: "2rem" }}
              />
            </Link>
          </Box>

          <Flex
            style={{
              gap: "2rem",
              padding: "1rem",
              marginLeft: "27rem",
              color: "#ffffff",
            }}
          >
            <Box>
              <Link to="/shop">
                <h3>
                  Shop{" "}
                  <TriangleDownIcon
                    style={{ color: "#4296cb", width: "10px" }}
                  />
                </h3>
              </Link>
            </Box>
            <Box>
              <Link to="/dailydeals">
                <h3>Daily Deals </h3>
              </Link>
            </Box>
            <Box>
              <Link to="/offerzone">
                <h3>Offer Zone </h3>
              </Link>
            </Box>
            <Box>
              <Link to="/more">
                <h3>
                  More{" "}
                  <TriangleDownIcon
                    style={{ color: "#4296cb", width: "10px" }}
                  />
                </h3>
              </Link>
            </Box>

            <Box>
              <IconButton
                style={{ borderRadius: "2rem", marginLeft: "5rem" }}
                width={"200px"}
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            </Box>

            <Box>
              <Link to="/login">
                <Image style={{width:"35px", borderRadius:"1rem"}} src="data:image/png;base64,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" />
              </Link>
            </Box>

            <Box>
              <Link to="/cart">
                <Image style={{width:"35px", borderRadius:"1rem"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAaVBMVEX///8AAABFQkPz8/NTUFGVlZWCgIGura0jHyCopqdmZGX8/Pz29vb5+flhYGCNjIzKysoaGBknJSZ8e3ve3t69vb0fGhvo6OjU09TFxMS3t7cVEBEzMTE8Ojt3dnedm5wLAANKSUlvbm58J8CGAAADsElEQVR4nO2Za5uyIBCGHbE8ICrkIYNS+/8/8h2s3YKure1azA8vd9sBdPVxGIYBgsDj8Xg8Ho/H4/F4PB6PZ0HqlKysoAdQ6aGq2XoSdpBwAJBcTKfNodp3+cclNGiFSQkJF7iapvrTGqq0C0hdNWmZKS1CQvxpCQak7ic4rSoB2UC0toQDHNfupXto9ytLoADNyhKCI5RrSzit748xwNoSKoBuZQmdgCYnb+NSApukCt/n5NJ0mWzBZGy5VfNQAaNwaIgBVGxykuJgVOykSs1TUg6pOwnoj9SsOQA3K2KYrFOCAnbuJHQAVohu7H6aPkoAl4M8CW2b7m0Jw0P4qkC6THXOtk1RgulrjyN6CZHL9LOEwjRzLcF8xC1k5r/kk9uR5SFlwGhlS7BSq0f/+RsdtImBSF7RcuF2GgCJtCKRVWGXoZVbpwqCSRZxes9RnmOznBnlTeI6z9naDl/AxihHVrfFwOF4ChSDMls2u/g7o/lcT4+WhMx5mlONrdkDLpGCMsZy3V2ZgMP9YSrdDRD08vBdC71Rv4OzPprnjMwSpHm8d5h1k2uLKhiM+g0UDNUxMhshYFYUKCF0JCDPUQLeiqLhs0DfDdue6u9URgRNgEfwJMoISqC3AEqdJd0ogDD9oIQOXGRZga+smN+RUvitC/ovK7iYq7+QrkJjngc5SsDvvALVAk9GLvFDwJgoLjjwkfOEcylbpUSbfMcl2bqaA6KJtb/pFq9FuyvLjX7NH9tW4q/N13ubCKz95ihdZSuUaFcgs09EmIBga2t30B+dTuy/ChQHb64f++oOOuV2JAEvSefL4ruA7fcN8YX+V18kzWf0ILr50AyGxiVWqqyUASVUd8UG1F3jn6FYQAHeRN57WG7a+gDh7ShRLnPnG505q2NHIznF7PU2KvXjuMgCGbFG38gIl8O96UsQSyjQU6owu0Px8HwrhVx9/z6LhdYjOmFO6sbxSbF6fb33YYVMtr9kl9qzGieUqy844dTFcTb6NtF4/PxquMF+9WYITmO0iIf9HiJWXoyfg/PHtyQeJfSvz1oUWkgevYV7o3X2itsrhtfXfFvDsHmHYe0NjOUghyF+/nRdPDRLbm/Weg1DPBuGGz2RCJfrvrmSSZLIJ1MUMq8GyeX2LnqYl5DMObzBcDljXCRf0aRXCT93t518JfKPVFcJP4+YV5Fyse08Fv7OF8YF97E6vYGtnvn7Xm9JRItGpSp9MVixPl17U9Xj8Xg8Ho/H4/F4PB7Pf8Q/4oo4C2Gf5pQAAAAASUVORK5CYII=" />
              </Link>
            </Box>
          </Flex>
        </Flex>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Navbar;
