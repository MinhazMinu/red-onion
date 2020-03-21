import React from "react";

import fakedata from "../../../../asset/fakedata";
import "./Home.css";

import Navi from "../../../nav/Navi";

const Home = () => {
  return (
    <div>
      <Navi></Navi>
    </div>
  );
};

export default Home;

{
  /* <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/breakfast">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/lunch">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/dinner">Option 2</Nav.Link>
  </Nav.Item>
</Nav> */
}
