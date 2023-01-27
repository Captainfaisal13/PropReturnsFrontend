import React from "react";
import { useContext, useState } from "react";

const data = [
  {
    _id: 1,
    price: 699678,
    address: "3517 W.Gray St. Utica, Pennsylvania 57867",
    bedrooms: 2,
    bathrooms: 1,
    area: 60,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg",
  },
  {
    _id: 2,
    price: 699678,
    address: "3517 W.Gray St. Utica, Pennsylvania 57867",
    bedrooms: 2,
    bathrooms: 1,
    area: 60,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
  },
  {
    _id: 3,
    price: 699678,
    address: "3517 W.Gray St. Utica, Pennsylvania 57867",
    bedrooms: 2,
    bathrooms: 1,
    area: 60,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg",
  },
  {
    _id: 4,
    price: 699678,
    address: "3517 W.Gray St. Utica, Pennsylvania 57867",
    bedrooms: 2,
    bathrooms: 1,
    area: 60,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg",
  },
  {
    _id: 5,
    price: 699678,
    address: "3517 W.Gray St. Utica, Pennsylvania 57867",
    bedrooms: 2,
    bathrooms: 1,
    area: 60,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg",
  },
  {
    _id: 6,
    price: 699678,
    address: "3517 W.Gray St. Utica, Pennsylvania 57867",
    bedrooms: 2,
    bathrooms: 1,
    area: 60,
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg",
  },
];

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [active, setActive] = useState("search");

  return (
    <AppContext.Provider value={{ active, setActive }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
