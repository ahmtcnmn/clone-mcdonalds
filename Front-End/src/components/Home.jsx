import React from "react";
import Boxes from "./Boxes";
import FollowUs from "./FollowUs";
import HomeImg from "./HomeImg";

function Home() {
  return (
    <div>
      <div>
        <HomeImg />
      </div>
      <Boxes />
      <FollowUs />
    </div>
  );
}

export default Home;
