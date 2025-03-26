import React from "react";
import Search from "./Search";
import HeaderHome from "./HeaderHome";
import TournamentCard from "./TournamentCard";
import FeaturesSection from "./FeaturesSection";

function Tournaments() {
  return (
    <div className="bg-[#290942]" >
      <HeaderHome />
      <div className="flex flex-col gap-8 items-center place-items-center pt-24 bg-[#290942]">
        <Search />
        <FeaturesSection />
      </div>
    </div>
  );
}

export default Tournaments;
