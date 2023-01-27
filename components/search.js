import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-7 md:grid-rows-2 lg:grid-rows-1">
      <div className="flex gap-2 py:2 px-2 md:py-3 md:px-4 bg-[#F3F3F3] rounded-xl md:col-start-1 md:col-end-3">
        <BiSearch className="bg-[#F3F3F3] text-[#969696] icon" size={24} />
        <input
          placeholder="Enter an address, city or ZIP code"
          className="bg-[#F3F3F3] outline-none text-xs w-48 text-[#969696]"
          type="text"
        />
      </div>
      <select
        className="outline-none hidden md:block text-xs bg-[#F3F3F3] px-4 rounded-xl border-r-8 border-[#F3F3F3] font-bold"
        name="cars"
        id="cars"
        style={{ borderRightWidth: "20px" }}
      >
        <option value="volvo">For sale</option>
        <option value="saab">For Rent</option>
      </select>
      <select
        className="outline-none hidden md:block text-xs bg-[#F3F3F3] px-4 rounded-xl border-r-4 border-[#F3F3F3] font-bold"
        name="cars"
        id="cars"
        style={{ borderRightWidth: "20px" }}
      >
        <option value="volvo">Type: House</option>
        <option value="volvo">Type: House</option>
        <option value="volvo">Type: House</option>
      </select>
      <select
        className="outline-none  hidden md:block text-xs bg-[#F3F3F3] px-4 rounded-xl border-r-4 border-[#F3F3F3] font-bold"
        name="cars"
        id="cars"
        style={{ borderRightWidth: "20px" }}
      >
        <option value="volvo">Min Price: $500k</option>
      </select>
      <select
        className="outline-none hidden md:block text-xs bg-[#F3F3F3] px-4 rounded-xl border-r-4 border-[#F3F3F3] font-bold"
        name="cars"
        id="cars"
        style={{ borderRightWidth: "20px" }}
      >
        <option value="volvo">Max Price: $700k</option>
      </select>
      <select
        className="outline-none hidden md:block text-xs bg-[#F3F3F3] px-4 rounded-xl border-r-8 border-[#F3F3F3] font-bold"
        name="cars"
        id="cars"
        style={{ borderRightWidth: "20px" }}
      >
        <option value="volvo">Floor area: 60 m2</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default Search;
