import React from "react";
import FiriLogo from "./firilogo";
import Score from "./score";

const Basket: React.FC = () => {
  const enabledFeatures = [<FiriLogo />, <Score />];

  return <div>{enabledFeatures}</div>;
};

export default Basket;
