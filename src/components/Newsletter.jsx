import React from "react";
import HeaderHome from "./HeaderHome";
import NewsCards from "./NewsCards";
import Stats from "./Stats";
function Newsletter() {
  return (
    <div classname="flex flex-col gap-8 bg-[#290942] text-white" style={{backgroundColor: "#290942"}}>
      <HeaderHome />
      <div classname="flex flex-col gap-8 bg-[#290942] text-white ">
        <div className="pt-24 bg-[#290942] text-white">
          <NewsCards />
        </div>

        <div className="pt-32 bg-[#290942] text-white">
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
