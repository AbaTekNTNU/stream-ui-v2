import React from "react";
import styles from "./Score.module.css";

type Props = {
  home: number;
  away: number;
};

const Score = ({ home, away }: Props) => {
  return (
    <div className={styles.scoreContainer}>
      {home}
      {away}
    </div>
  );
};

export default Score;
