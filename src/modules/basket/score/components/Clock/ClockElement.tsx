import React from "react";

const addHeadingZero = (num: number): string => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num.toString();
  }
};

const getUiTime = (secondsRemainging: number): string => {
  return `${addHeadingZero(
    Math.floor(secondsRemainging / 60)
  )}:${addHeadingZero(secondsRemainging % 60)}`;
};

type ClockEventProps = {
  secondsRemaining: number;
};

const ClockElement: React.FC<ClockEventProps> = ({ secondsRemaining }) => {
  return (
    <div>
      <span>{getUiTime(secondsRemaining)}</span>
    </div>
  );
};

export default ClockElement;
