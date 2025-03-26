import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className="m-2 max-w-screen-md bg-[#290942]">
      <div className="rounded-xl border border-gray-200 bg-[#290942] p-6 ">
        <h2 className="text-white text-xl font-bold">
          Search for nearby tournaments
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col">
            <label for="name" className="text-white text-sm font-medium">
              Location
            </label>
            <select
              id="name"
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Pune</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              for="ageGroup"
              className="text-white text-sm font-medium"
            >
              Age Group
            </label>
            <select
              id="ageGroup"
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Under 12</option>
              <option>Under 15</option>
              <option>Under 18</option>
              <option>Under 21</option>
              <option>Under 25</option>
              <option>Under 30</option>
              <option>Under 40</option>
              <option>Under 50</option>
              <option>Under 60</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label for="date" className="text-white text-sm font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label for="status" className="text-white text-sm font-medium">
              Sport Type
            </label>

            <select
              id="status"
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Cricket</option>
              <option>Football</option>
              <option>Badminton</option>
              <option>Swimming</option>
              <option>Marathon</option>
              <option>Yoga</option>
              <option>Table Tennis</option>
              <option>Box Cricket</option>
            </select>
          </div>
        </div>

        <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
          <button className="active:scale-95 rounded-lg bg-orange-500 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
