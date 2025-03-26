import React from "react";
import HeaderHome from "./HeaderHome";
import AppleCardsCarouselDemo from "./AppleCardsCarouselDemo";
import { ProductFeatures } from "./ProductFeatures";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
function About() {
  return (
    <div className="flex flex-col gap-16 bg-[#290942] text-white">
      <HeaderHome />
      <div class="bg-[#290942] dark:bg-gray-900 pt-16">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            class="w-full dark:hidden"
            src="/images/logo.png"
            alt="dashboard image"
          />
          <img
            class="w-full hidden dark:block"
            src="/images/logo.png"
            alt="dashboard image"
          />
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
              About Us
            </h2>

            <p class="mb-6 font-semibold   text-white md:text-lg dark:text-gray-400">
              At Sportify, we believe that health and fitness should be
              accessible, fun, and impactful for everyone. Whether you’re a
              seasoned athlete or just starting your fitness journey, we are
              here to support you every step of the way. Our mission is to
              create a one-stop platform that connects individuals with
              everything they need to live a healthier, more active lifestyle.
            </p>
            <a
              href="#"
              class="inline-flex items-center text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Know More
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-[#290942] dark:bg-gray-900">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
              Our Vision
            </h2>
            <p class="mb-6 font-semibold   text-white md:text-lg dark:text-gray-400">
              To inspire and empower individuals to prioritize their physical
              and mental well-being through sports, fitness, and wellness. We
              envision a world where people of all ages can lead healthy, active
              lives and find joy in movement.
            </p>
            <a
              href="#"
              class="inline-flex items-center text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Know More
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <img
            class="w-full dark:hidden"
            src="https://www.designforvision.com/Content/eyeglasses/sportsvisionabout/sports3.jpg"
            alt="dashboard image"
          />
          <img
            class="w-full hidden dark:block"
            src="https://www.designforvision.com/Content/eyeglasses/sportsvisionabout/sports3.jpg"
            alt="dashboard image"
          />
        </div>
      </div>
      <section class="bg-[#290942] dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
              Why Choose Sportify?
            </h2>
            <p class="text-white sm:text-xl dark:text-gray-400">
              Here at Sportify we focus on providing a one stop solution for all
              your physical health related queries.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ffd8bd] lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-orange-500 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">
                All-In-One Platform
              </h3>
              <p class="text-white dark:text-gray-400">
                Sportify is your one-stop destination to meet your fitness and
                sports needs, whether you're a passionate sports fan, an
                athlete, or someone looking to stay active, we have it all.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ffd8bd] lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-orange-500 lg:w-6 lg:h-6 dark:text-peach"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">
                Community Focused
              </h3>
              <p class="text-white dark:text-gray-400">
                Sportify brings together a community of like-minded individuals
                passionate about living healthy lives. Get inspired by others’
                stories and join the movement.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ffd8bd] lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-orange-500 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">
                Accessibility
              </h3>
              <p class="text-white dark:text-gray-400">
                Whether you're at home, at a gym, or out for a run, Sportify is
                always there to support you on your journey to better health.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ffd8bd] lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-orange-500 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">
                Upcoming Tournaments
              </h3>
              <p class="text-white dark:text-gray-400">
                Never miss a local tournament again! Sportify provides
                information on upcoming sports events, so you can sign up,
                compete, and engage with your community.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ffd8bd] lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-orange-500 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">
                Nearby Clubs
              </h3>
              <p class="text-white dark:text-gray-400">
                Find fitness clubs, yoga studios, and wellness centres near you
                to ensure you have the best resources at your fingertips.
                Sportify makes it easy to locate clubs offering everything from
                gym workouts to yoga and marathons.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#ffd8bd] lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-orange-500 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold text-white dark:text-white">
                Yoga & Wellness
              </h3>
              <p class="text-white dark:text-gray-400">
                Explore a wide range of yoga and wellness programs to enhance
                your mental health, flexibility, and overall well-being. From
                beginner sessions to advanced yoga practices, we have something
                for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <ProductFeatures /> */}
      <h2 class="mb-4 text-7xl tracking-tight font-extrabold text-white dark:text-white mx-auto">
        Our Team
      </h2>
      <AnimatedTestimonialsDemo />
      <section class="bg-[#290942] dark:bg-[#290942]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
              Join Us on the Journey to Health!
            </h2>
            <p class="mb-8 font-semibold text-white sm:text-xl dark:text-gray-400">
              Thank you for visiting Sportify! We're excited to be part of your
              fitness journey. Explore our services, join our community, and
              let's work together toward a healthier and happier lifestyle!
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white border border-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  class="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                View more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
