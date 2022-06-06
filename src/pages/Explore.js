import React from "react";
import ExploreComp from "../components/Explore";
import ExploreBar from "../components/ExploreBar";
const Explore = () => {
  return (
    <div>
      <div className="text-center my-8 text-3xl font-extrabold">
        Explore Our Categories
      </div>
      <ExploreBar />
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3  md:grid-cols-2 gap-3 sm:grid-cols-1">
        {Array.from(Array(12)).map((_, index) => (
          <ExploreComp key={index} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
