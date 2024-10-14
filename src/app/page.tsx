import React from "react";
import Navbar from "./component/navbar";
import Selling from "./component/selling";
import About from "./component/about";
import Product from "./component/product";
import Offer from "./component/offer";
import ForYou from "./component/foryou";
import FeedBack from "./component/feedback";
import Footer from "./component/footer";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <About />
      <Selling />
      <Product />
      <Offer />
      <ForYou />
      <FeedBack/>
      <Footer/>
    </div>
  );
}
