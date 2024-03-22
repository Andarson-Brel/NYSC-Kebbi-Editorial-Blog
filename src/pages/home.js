import React, { useEffect, useState } from "react";
import SwiperCarousel from "../components/swiper";
import HomeBlog from "../components/homeBlogSection";
import HomeAbout from "../homeAboutSection";
import CategorySection from "../components/categorySectionComponent";
import StateCordinatorsMsg from "../components/StateCordinatorsMsg";
import ExecutivesComponent from "../components/executivesComponent";
import { Link } from "react-router-dom";

export function Home({ blogs, loading, setLoading, user }) {
  // console.log(blogs);
  return (
    <div>
      <SwiperCarousel blogs={blogs} />
      <HomeBlog blogs={blogs} user={user} />
      <HomeAbout />
      <CategorySection
        titleText={"Choose A Catagory"}
        titleStyle={{
          textAlign: "center",
          color: "#232536",

          lineheight: "48px",
          letterspacing: "-2px",
        }}
      />
      <StateCordinatorsMsg />
      <ExecutivesComponent />
    </div>
  );
}
