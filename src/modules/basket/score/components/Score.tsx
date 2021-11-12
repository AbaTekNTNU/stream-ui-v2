import React from "react";
import styles from "./Score.module.css";
import scoreLogo from "./../assets/score_logo.png";

export type TeamData = {
  name: string;
  score: number;
};

type Props = {
  home: TeamData;
  away: TeamData;
};

const Score = ({ home, away }: Props) => {
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.topWrapper}>
        <div className={styles.topElement}>
          <span className={styles.teamName}>{home.name}</span>
          <span className={styles.scoreText}>{home.score}</span>
        </div>
        <div className={styles.topElement}>
          <span className={styles.teamName}>{away.name}</span>
          <span className={styles.scoreText}>{away.score}</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottomWrapper}>
        <div className={styles.logoWrapper}>
          <img className={styles.scoreLogo} src={scoreLogo} />
        </div>
        <div className={styles.periodWrapper}>
          <span className={styles.periodText}>PERIODE</span>
          <div className={styles.periodDataWrapper}>
            <span className={styles.periodDataText}>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
