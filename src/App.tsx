import Header from "./Components/Header/Header";
import Routers from "./views/Routers/Routers";
import Footer from "./Components/Footer/Footer";
import { Flex } from "@chakra-ui/react";
import "./utils/118n";

function App() {
  return (
    <>
      <Header />
      <Flex as="header" justifyContent="center">
        <Flex maxWidth="1240px" w="100%">
          <Routers />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default App;
