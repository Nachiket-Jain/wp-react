"use client";

import { Tabs } from "./ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Fitness Tips",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-white bg-gradient-to-br from-orange-500 to-violet-900">
          <p className="text-lg md:text-2xl font-extrabold">
            Marathon Training Tips
            <br />
            <span className="font-normal text-sm">
              Gear up for your next marathon with expert tips from seasoned
              runners
            </span>
          </p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Exclusive Offers",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-white bg-gradient-to-br from-orange-500 to-violet-900">
          <p className="text-lg md:text-2xl font-extrabold">
            Yoga Offers
            <br />
            <span className="font-normal text-sm">
              Grab the offer now before it ends!
            </span>
          </p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Member Spotlight",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-white bg-gradient-to-br from-orange-500 to-violet-900">
          <p className="text-lg md:text-2xl font-extrabold">
            Motivational Talks
            <br />
            <span className="font-normal text-sm">
              Spotlight on our inspiring members making a difference in the
              community
            </span>
          </p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Health and Wellness News",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-white bg-gradient-to-br from-orange-500 to-violet-900">
          <p className="text-lg md:text-2xl font-extrabold">
            Diabetes News
            <br />
            <span className="font-normal text-sm">
              Stay updated on the latest diabetes research,treatment
              advancements and lifestyle tips
            </span>
          </p>
          <DummyContent4 />
        </div>
      ),
    },
    {
      title: "Healthy Recipes",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-white bg-gradient-to-br from-orange-500 to-violet-900">
          <p className="text-lg md:text-2xl font-extrabold">
            Juice Recipes
            <br />
            <span className="font-normal text-sm">
              Sip your way to health with refreshing and nutritious juices.
            </span>
          </p>
          <DummyContent5 />
        </div>
      ),
    },
  ];

  return (
    <div className="text-white h-[20rem] md:h-screen [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-12">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <img
      src="https://kdahweb-static.kokilabenhospital.com/kdah-2019/tips/54b7aeb23c4dcmarathon.png"
      alt="dummy image"
      className="object-fill object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent2 = () => {
  return (
    <img
      src="https://d168jcr2cillca.cloudfront.net/uploadimages/sales_offer_mainpic_20100723152428Urban-Yoga.png"
      alt="dummy image"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent3 = () => {
  return (
    <img
      src="https://goqii.com/blog/wp-content/uploads/Dhiren.jpg"
      alt="dummy image"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent4 = () => {
  return (
    <img
      src="https://www.diabeteswellness.net/sites/default/files/styles/large/public/newsletterIMG_6292.JPG?itok=G1AcIka7"
      alt="dummy image"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent5 = () => {
  return (
    <img
      src="https://i.pinimg.com/736x/36/04/4c/36044c1277fe21a2076f05d3e711714a.jpg"
      alt="dummy image"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
