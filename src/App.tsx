import Header from "./Components/Header/Header";
import Routers from "./views/Routers/Routers";
import Footer from "./Components/Footer/Footer";
import { Flex } from "@chakra-ui/react";
import "./styles/index.css";
import "./styles/fonts.css";
import "./utils/118n";

function App() {
  return (
    <>
      <Header />
      <Flex as="header" justifyContent="center"   mx='20px'>
        <Flex   justifyContent='center' maxWidth="1196px" w='100%'>
          <Routers />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default App;
