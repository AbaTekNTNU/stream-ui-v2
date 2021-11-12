import React from "react";
import Score from "./score";

const Basket: React.FC = () => {
  const enabledFeatures = [<Score />];

  return <div>{enabledFeatures}</div>;
};

export default Basket;
