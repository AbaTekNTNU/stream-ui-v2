import React from "react";
import FiriLogo from "./firilogo";
import Score from "./score";
import Team from "./team";

const Basket: React.FC = () => {
  const enabledFeatures = [<Team />, <FiriLogo />, <Score />];

  return <div>{enabledFeatures}</div>;
};

export default Basket;
