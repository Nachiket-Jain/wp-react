import { cn } from "../utils/cn";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Summer Football Championship 2025",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      age: "Age Group: 16 - 35 years",
      date: "February 10, 2025 - 9 AM Onwards",
      location: "Shivaji Stadium, Mumbai",
      sport: "Football",
      icon: <IconTerminal2 />,
    },
    {
      title: "Mumbai Marathon 2025",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      age: "Age Group: 18 - 50 years",
      date: "February 15, 2025 - 5 AM Onwards",
      location: "Gateway of India, Mumbai",
      sport: "Running",
      icon: <IconTerminal2 />,
    },
    {
      title: "Yoga Championship 2025",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      age: "Age Group: 18 - 50 years",
      date: "September 26, 2024 - 7 AM Onwards",
      location: "Wellness Center, Mumbai",
      sport: "Yoga",
      icon: <IconTerminal2 />,
    },
    {
      title: "National Badminton Open 2024",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      age: "Age Group: 16 - 40 years",
      date: "December 10, 2024 - 8 AM Onwards",
      location: "ASC, Mumbai",
      sport: "Badminton",
      icon: <IconTerminal2 />,
    },
    {
      title: "Tennis Masters Tournament 2024",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      age: "Age Group: 18 - 30 years",
      date: "November 30, 2024 - 9 AM Onwards",
      location: "R.K.Tennis Complex, Mumbai",
      sport: "Tennis",
      icon: <IconTerminal2 />,
    },
    {
      title: "Mumbai Cricket Cup 2024",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      age: "Age Group: 16 - 30 years",
      date: "December 1, 2024 - 9 AM Onwards",
      location: "MCA Stadium, Mumbai",
      sport: "Cricket",
      icon: <IconTerminal2 />,
    },
    {
      title: "10K Run for Health 2024",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      age: "Age Group: 16 - 50 years",
      date: "December 25, 2024 - 9 AM Onwards",
      location: "Shivaji Park, Mumbai",
      sport: "Running",
      icon: <IconTerminal2 />,
    },
    {
      title: "National Volleyball Championship 2024",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      age: "Age Group: 16 - 30 years",
      date: "December 20, 2024 - 9 AM Onwards",
      location: "ASC, Mumbai",
      sport: "Volleyball",
      icon: <IconTerminal2 />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto bg-[#290942]">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  age,
  date,
  location,
  sport,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#5c1b8f] dark:from-purple-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#5c1b8f] dark:from-purple-800 to-transparent pointer-events-none" />
      )}
      {/* <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div> */}
      <div className="flex flex-col gap-2">
        <div className="pl-10 group-hover/feature:translate-x-2 transition duration-200">
          <p class="bg-[#ed8032] max-w-fit text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-[#ed8032] dark:text-white">
            {sport}
          </p>
        </div>

        <div className="text-2xl font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-neutral-100">
            {title}
          </span>
        </div>
      </div>

      <p className="text-md text-white dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {date}
      </p>
      <p className="text-md font-bold text-white dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {age}
      </p>
      <p className="text-md font-semibold text-white dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {location}
      </p>
      {/* <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p> */}
      <div className="pl-10 pt-4">
        <button
          type="button"
          class="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 relative z-10"
        >
          Know More
        </button>
      </div>
    </div>
  );
};
