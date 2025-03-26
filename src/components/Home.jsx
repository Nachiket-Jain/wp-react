import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
// import { Carousel } from "flowbite";
import AppleCardsCarouselDemo from "./AppleCardsCarouselDemo";
import { ContextData } from "../App";

function Home() {
  // const [user, setUser] = React.useContext(LoginContext);
  const {data, setData} = React.useContext(ContextData);
  console.log("user", data);  
  return (
    <div className="flex flex-col gap-8 bg-[#07051e]">
      <Hero />
      {/* <div className="flex flex-col justify-center items-center gap-12 p-12">
        <div className="flex justify-between gap-8">
          <Cards
            name="Veer"
            img="https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg"
            description="This is a description"
          />
          <Cards
            name="Veer"
            img="https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg"
            description="This is a description"
          />
          <Cards
            name="Veer"
            img="https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg"
            description="This is a description"
          />
          <Cards
            name="Veer"
            img="https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg"
            description="This is a description"
          />
        </div>
        <div className="flex justify-between gap-8">
          <Cards
            name="Veer"
            img="https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg"
            description="This is a description"
          />
          <Cards
            name="Veer"
            img="https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg"
            description="This is a description"
          />
          <Cards
            name="Veer"
            img="https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg"
            description="This is a description"
          />
          <Cards
            name="Veer"
            img="https://thumbs.dreamstime.com/b/sport-equipment-2-22802518.jpg"
            description="This is a description"
          />
        </div>
      </div> */}
      <AppleCardsCarouselDemo />
    </div>
  );
}

export default Home;
