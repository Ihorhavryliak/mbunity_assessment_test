import { Route, Routes } from "react-router-dom";
import Contact from "../../Components/Contact/Contact";
import Home from "../../Components/Home/Home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="contact">
            <Route index element={<Contact />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
