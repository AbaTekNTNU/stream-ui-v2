import React from "react";
import styles from "./Score.module.css";
import scoreLogoMen from "./../assets/score_logo_men.png";
import scoreLogoWomen from "./../assets/score_logo_women.png";
import { FiriLogoGender } from "../../firilogo/reducer";

export type TeamData = {
  name: string;
  score: number;
};

type Props = {
  home: TeamData;
  away: TeamData;
  logoGender: FiriLogoGender;
};

const Score = ({ home, away, logoGender }: Props) => {
  const logo =
    logoGender === FiriLogoGender.MEN ? scoreLogoMen : scoreLogoWomen;

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
          <img className={styles.scoreLogo} src={logo} />
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
