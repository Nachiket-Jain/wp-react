"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-8">
      <h2 className="max-w-7xl pl-4 mx-8 text-xl md:text-5xl font-bold text-[#ed8032] dark:text-neutral-200 font-sans">
        Get to know your Sports.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const CricketContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Basic Overview</span>{" "}
          <br />
          Cricket is a bat-and-ball game played between two teams of eleven
          players each on a circular or oval field. The objective is to score
          runs by hitting the ball and running between wickets.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cricket_field_parts.svg/1200px-Cricket_field_parts.svg.png"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Wickets and Runs</span>{" "}
          <br />
          Each team has a wicket at each end of the pitch, consisting of three
          stumps topped by two bails. Runs are scored when batsmen successfully
          run between the wickets after hitting the ball.
        </p>
        <img
          src="https://c.ndtvimg.com/2023-05/kpd2npv8_dhoni_625x300_29_May_23.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Formats of the Game
          </span>{" "}
          <br />
          Cricket is played in various formats, including Test matches, One Day
          Internationals (ODIs), and Twenty20 (T20) matches, each with different
          rules and durations.
        </p>
        <img
          src="https://i.ytimg.com/vi/CLrTDD1KH-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAakD_KkzZPpefxQrVUPaJ370f7kg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};

const FootballContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Game Structure</span>{" "}
          <br />
          Football, also known as soccer in some countries, is played between
          two teams of eleven players each on a rectangular field with a goal at
          each end. The objective is to score goals by getting the ball into the
          opposing team's net.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Soccer_pitch_dimensions.png/1200px-Soccer_pitch_dimensions.png"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Offside Rule</span>{" "}
          <br />
          The offside rule is one of the fundamental rules in football,
          preventing attacking players from gaining an unfair advantage by being
          closer to the opponent's goal line than both the ball and the second
          last opponent when the ball is played to them.
        </p>
        <img
          src="https://i.ytimg.com/vi/GePlbCsGniA/maxresdefault.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Major Tournaments</span>{" "}
          <br />
          Major international tournaments include the FIFA World Cup, UEFA
          European Championship, and Copa America, showcasing top national teams
          from around the world.
        </p>
        <img
          src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/184578-cgqjxwwezt-1671391721.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};

const BadmintonContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Basic Overview</span>{" "}
          <br />
          Badminton is a racquet sport played by either two players (singles) or
          four players (doubles) who take turns hitting a shuttlecock over a
          net. The objective is to score points by landing the shuttlecock in
          the opponent's court.
        </p>
        <img
          src="https://i.ytimg.com/vi/RHMxnyAXOPc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBQIKtT4PTuNF_KZwMtpX8El86vsg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Scoring System</span>{" "}
          <br />
          The scoring system in badminton typically follows a rally point system
          where points can be scored by either side regardless of who served.
        </p>
        <img
          src="https://keepthescore.com/static/images/blog_images/badminton_court.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-fill pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Common Shots</span>{" "}
          <br />
          Key shots in badminton include smashes, drops, clears, and drives,
          each requiring different techniques and strategies to execute
          effectively.
        </p>
        <img
          src="https://cdn.prod.website-files.com/5b44edefca321a1e2d0c2aa6/6004bba91a3798f271aa22a1_Dimensions-Sports-Badminton-Badminton-Smash-Poses-Men.svg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};

const TTContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Game Structure</span>{" "}
          <br />
          Table tennis, also known as ping pong, is played on a rectangular
          table divided by a net. Players use small paddles to hit a lightweight
          ball back and forth across the table.
        </p>
        <img
          src="https://m.media-amazon.com/images/I/711bFPjVN-L.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Scoring System</span>{" "}
          <br />
          Matches are typically played to 11 points, with players needing to win
          by at least two points. Games can be played as best of five or seven
          sets.
        </p>
        <img
          src="https://www.tabletennisengland.co.uk/content/uploads/2021/09/rules-of-the-game-A3-scaled.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Spin Techniques</span>{" "}
          <br />
          Spin plays a crucial role in table tennis; players use topspin,
          backspin, and sidespin to control the ball's trajectory and bounce,
          making it difficult for opponents to return shots effectively.
        </p>
        <img
          src="https://www.wikihow.com/images/thumb/d/d6/Serve-a-Ping-Pong-Ball-With-a-Topspin-Step-4-Version-2.jpg/v4-460px-Serve-a-Ping-Pong-Ball-With-a-Topspin-Step-4-Version-2.jpg.webp"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};

const SwimmingContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Stroke Types</span>{" "}
          <br />
          Swimming includes various strokes such as freestyle, breaststroke,
          backstroke, and butterfly, each with distinct techniques and rules.
        </p>
        <img
          src="https://www.swim-teach.com/images/different-swimming-strokes-tester.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Competitive Events</span>{" "}
          <br />
          Competitive swimming events are categorized into different distances
          and strokes, with races typically ranging from 50 meters to 1500
          meters in various styles.
        </p>
        <img
          src="https://cdn.britannica.com/01/193601-050-F8F18A9B/Katie-Ledecky-American-lead-way-women-world-2016.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Start Techniques</span>{" "}
          <br />
          Swimmers use starting blocks for explosive starts in races; mastering
          this technique can significantly impact race performance.
        </p>
        <img
          src="https://d1s9j44aio5gjs.cloudfront.net/2016/11/masters_swimmers_on_starting_blocks_0.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};

const YogaContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Types of Yoga</span>{" "}
          <br />
          There are various styles of yoga including Hatha, Vinyasa, Ashtanga,
          and Kundalini, each focusing on different aspects such as physical
          postures (asanas), breath control (pranayama), and meditation.
        </p>
        <img
          src="https://addayogabali.com/wp-content/uploads/2022/01/Hatha-Yoga.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Health Benefits</span>{" "}
          <br />
          Practicing yoga can improve flexibility, strength, balance, and mental
          clarity while also reducing stress and promoting relaxation.
        </p>
        <img
          src="https://sorichorganics.com/cdn/shop/articles/Benefits_of_yoga_for_your_health_800x800.png?v=1703835364"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Meditation Practices
          </span>{" "}
          <br />
          Meditation is often incorporated into yoga sessions to enhance
          mindfulness and promote emotional well-being through various
          techniques such as guided meditation or breath-focused practices.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2024/04/19/22/25/man-8707406_960_720.png"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};

const BasketballContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Basic Overview</span>{" "}
          <br />
          Basketball is played between two teams of five players on a
          rectangular court with a hoop at each end. The goal is to score points
          by shooting the ball through the opponent's hoop.
        </p>
        <img
          src="https://cdn.gmtm.com/optimized/content+images+2021+06/1200/webp/2751923597_e4788045db_b.jpeg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Scoring System</span>{" "}
          <br />
          Points are scored by shooting from different areas: 1 point for free
          throws, 2 points for field goals within the three-point line, and 3
          points for shots beyond it.
        </p>
        <img
          src="https://www.wikihow.com/images/thumb/a/a0/Play-Basketball-Step-3-Version-4.jpg/v4-460px-Play-Basketball-Step-3-Version-4.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Positions in Basketball
          </span>{" "}
          <br />
          Players typically assume specific roles such as point guard, shooting
          guard, small forward, power forward, and center based on their skills
          and physical attributes.
        </p>
        <img
          src="https://lh7-us.googleusercontent.com/6tCP_EpBRmilO6tsFOl7JDe1SzV-L1oAsHXaFSRyqUneH2lZA-zRRqPil_eYC4cNbiusVMaEl2X0hSLkgK-S0jBvOaIxXmOYcuwXEv_mBKNRWy86S2SPuzakn04Ym7-PM4i1uKdw5cLC9VD3jRAwoOuJ5UqZy2kO6JGJirabWoS3ooELaJNDjXE54eAb4b7y"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};

const BoxCricketContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Game Structure</span>{" "}
          <br />
          Box cricket is a modified version of cricket played indoors or in
          confined spaces with smaller teams and pitches designed for limited
          play areas.
        </p>
        <img
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_60/lsci/db/PICTURES/CMS/242100/242197.png"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Rules Variations</span>{" "}
          <br />
          The rules are adapted for quick gameplay; matches usually have fewer
          overs compared to traditional cricket formats, making it fast-paced
          and exciting.
        </p>
        <img
          src="https://nimionlineadmission.in/ubi/blog/wp-content/uploads/2023/07/cricket-fielding-positions_7c5aa7dc3.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Popularity in Urban Areas
          </span>{" "}
          <br />
          Box cricket has gained popularity in urban settings where space is
          limited; it allows enthusiasts to enjoy cricket without needing large
          outdoor fields.
        </p>
        <img
          src="https://woxsen.edu.in/uploads/A20240902092050.webp"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};
const RunningContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Basic Overview</span>{" "}
          <br />
          Running events test endurance, speed, and determination. Participants
          aim to complete specific distances, ranging from short sprints to the
          iconic 42.195 km marathon, while overcoming physical and mental
          challenges. Timing is key, with rankings determined by who crosses the
          finish line fastest. Marathons also celebrate personal achievements,
          with many runners aiming to beat their personal best or complete the
          course within a target tim
        </p>
        <img
          src="https://world-masters-athletics.org/wp-content/uploads/2023/08/Bucharest_Marathon-1536x829.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Key Aspects</span> <br />
          Marathon running involves pacing, strategically placed hydration
          stations, route markings, and a community spirit to prevent burnout,
          conserve energy, and ensure a smooth, energetic event that celebrates
          determination and perseverance.
        </p>
        <img
          src="https://www.simonbrookercoaching.com/uploads/1/2/4/9/124932885/runner-a4_orig.png"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Popular Distances</span>{" "}
          <br />
          Marathon events cater to different levels of participants, offering 5K
          and 10K runs for beginners, half marathons for experienced runners,
          and full marathons for seasoned runners, requiring physical and mental
          endurance.
        </p>
        <img
          src="https://www.bumrungrad.com/getattachment/aeda969e-9dab-4796-b856-6521819792bb/info-marathon-eng3-web.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};
const VolleyballContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Basic Overview</span>{" "}
          <br />
          Volleyball is a team sport where two teams of six players each aim to
          score points by hitting the ball over the net and grounding it in the
          opponent’s court. The game emphasizes coordination, teamwork, and
          quick reflexes.
        </p>
        <img
          src="https://volleyballxl.com/wp-content/uploads/2024/08/volleyball-rules.webp"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Scoring System</span>{" "}
          <br />
          The sport uses a rally point system, meaning every rally results in a
          point, regardless of which team served. Matches are typically played
          in sets, with the first team to win three sets declared the winner.
        </p>
        <img
          src="https://scorecount.com/volleyball/onilne-volleyball-scoreboard.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">Common Plays</span>{" "}
          <br />
          Volleyball involves a blend of offensive and defensive strategies,
          with spikes for scoring, blocks for countering, sets for positioning
          the ball, and digs for securing the ball during rallies. These plays
          create a dynamic and thrilling gameplay experience.
        </p>
        <img
          src="https://malagavolleyball.com/wp-content/uploads/rules_images.jpg"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-8"
        />
      </div>
    </>
  );
};

const data = [
  {
    category: "Cricket",
    title:
      "Join us for an exhilarating experience in cricket, to showcase your talent and compete for glory on the field!",
    src: "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CricketContent />,
  },
  {
    category: "Football",
    title:
      "Experience the passion and excitement of football, clashing on the pitch in a beautiful display of teamwork and skill!",
    src: "https://plus.unsplash.com/premium_photo-1661868926397-0083f0503c07?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <FootballContent />,
  },
  {
    category: "Badminton",
    title:
      "Dive into the world of badminton, where agility meets precision on the court!",
    src: "https://cdn.britannica.com/44/256944-050-8D414329/PV-Sindhu-2020-Tokyo-Olympics.jpg",
    content: <BadmintonContent />,
  },

  {
    category: "Table Tennis",
    title:
      "Join us for the thrilling sport of table tennis, where quick reflexes and strategic plays come to life! ",
    src: "https://img.buzzfeed.com/buzzfeed-static/static/2021-07/29/12/asset/9998fde51e9f/sub-buzz-2403-1627562917-6.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    content: <TTContent />,
  },
  {
    category: "Swimming",
    title:
      "Immerse yourself in the captivating world of swimming, gliding through the water with speed and grace!",
    src: "https://media.istockphoto.com/id/465177463/photo/underwater-shot-of-usa-female-swimmer.jpg?s=612x612&w=0&k=20&c=JLC0RXbzCV_E2IIDFFRYRVIaSMAgnRPkHcKr6U33jfo=",
    content: <SwimmingContent />,
  },
  {
    category: "Yoga",
    title:
      "Embrace the tranquillity and strength of yoga, finding harmony and balance through mindful movement.",
    src: "https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <YogaContent />,
  },
  {
    category: "Basketball",
    title:
      "Get ready for the excitement of basketball by competing on the court in a fast-paced showcase of skill and strategy!",
    src: "https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <BasketballContent />,
  },
  {
    category: "Box Cricket",
    title:
      "Experience the unique thrill of box cricket by engaging in high-energy play in a compact setting!",
    src: "https://blog.cricheroes.com/wp-content/uploads/2023/12/World-of-Box-Cricket.jpg",
    content: <BoxCricketContent />,
  },
  {
    category: "Running",
    title:
      "Lace up for the ultimate race, where every step fuels your passion and every finish line tells a story!",
    src: "https://media.wired.com/photos/5cae8365eaad993a02ff5d1c/1:1/w_1800,h_1800,c_limit/bostonmarathon-947031426.jpg",
    content: <RunningContent />,
  },
  {
    category: "Volleyball",
    title:
      "Dive, spike, and conquer the court in a game where teamwork meets pure adrenaline!",
    src: "https://breakingmuscle.com//wp-content/uploads/2012/09/shutterstock_62449996.jpg",
    content: <VolleyballContent />,
  },
];
