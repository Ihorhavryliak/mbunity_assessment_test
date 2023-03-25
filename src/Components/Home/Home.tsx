import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Box mt="91px" minHeight="30vh" w="100%">
      <Box>The Home page will be developed ...</Box>
      <Box color="blue.500">
        <NavLink to="/contact">Go to Contact page</NavLink>
      </Box>
    </Box>
  );
};
export default Home;
