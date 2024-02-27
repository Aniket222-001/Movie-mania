import React, { useState } from "react";
import sliders from "../data/Sliderdata";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "../Components/Style/Home.css";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [page, setPage] = useState(0);
  const length = sliders.length;

  const next = () => {
    if (page == length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };
  const prev = () => {
    if (page == 0) {
      setPage(length - 1);
    } else {
      setPage(page - 1);
    }
  };
  return (
    <div className="Home-container">
      <div className="Home-slider"> 
          <div className="Home-Img-box">
            <img src={sliders[page].img} alt="" className="Home-img" />
          </div>
          {/* ---------------------- */}
          
          <div className="Home-img-desc">
            <h3>{sliders[page].title}</h3>
            <span>{sliders[page].Category}</span>{" "}
            <span>{sliders[page].date}</span>
            <span>{sliders[page].time}</span> <span>{sliders[page].age}</span>
            <p className="Home-desc">{sliders[page].desc}</p>
            <NavLink to={`/Vidpage/${sliders[page].id}`} ><button className="Home-vid-btn">watch trailer</button></NavLink>
          </div>
          <div className="Home-btn">
            <div className="Home-btn-left common-btn" onClick={next}>
              <BsChevronCompactLeft className="arrow" />
            </div>
            <div className="Home-btn-right common-btn " onClick={prev}>
              <BsChevronCompactRight className="arrow" />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Home;
