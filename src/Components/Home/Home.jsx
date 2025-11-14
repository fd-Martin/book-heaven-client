import React from "react";
import LatestBooks from "../LatestBooks/LatestBooks";
import Slider from "../Slider/Slider";
import BookOfTheWeek from "../BookOfTheWeek/BookOfTheWeek";
import AboutTheBookHaven from "../AboutTheBookHeaven/AboutTheBookHeaven";



const Home = () => {
  return (
    <div>
      <Slider/>
      <LatestBooks/>
      <BookOfTheWeek/>
      <AboutTheBookHaven/>
    </div>
  );
};

export default Home;

