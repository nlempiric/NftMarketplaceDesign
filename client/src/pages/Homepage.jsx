import React from "react";
import HomePageDetails from "../component/HomePageDetails";
import HomeCardsComp from "../component/HomeCardsComp";
import HomeExploreNft from "../component/HomeExploreNft";
import HomeCreateSellComp from "../component/HomeCreateSellComp";
import ListsinFooter from "../component/ListsinFooter";

const Homepage = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center w-full "
        style={{ backgroundImage: 'url("/bg.webp")' }}
      >
        <HomePageDetails />
        <HomeCardsComp />  
      </div>
      <div className="">
        <HomeExploreNft />
      </div>
      <div className="bg-gradient-to-r from-[#d6ebdc] to-[#f6d8c8] via-[#dfe8dd] via-[#e6e8dc] via-[#eae8dd] via-[#f0dece] md:bg-gradient-to-b dsm:bg-gradient-to-b">
        <HomeCreateSellComp />
      </div>
      <div className="">
        <ListsinFooter />
      </div>
    </div>
  );
};

export default Homepage;
