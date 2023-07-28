"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./SelectClaimList.module.css";
import { useRouter } from "next/router";
import useStore from "../store";

export default function SelectClaimList({ result }) {
  // const router = useRouter();
  // const [selectedClaim, setSelectedClaim] = useState(null);
  const selectedClaim = useStore((state) => state.selectedClaim);
  const setSelectedClaim = useStore((state) => state.setSelectedClaim);

  const handleClaimClick = (clickClaim) => {
    setSelectedClaim(clickClaim);
    console.log(clickClaim);
  };

  return (
    <div className={styles["list-bg"]}>
      <ul className={styles["list-wrap"]}>
        {result.map((a, i) => (
          <li
            className={styles["list-item"]}
            key={i}
            onClick={() => handleClaimClick(a)}
          >
            <div className={styles.left}>
              <Link href="/claim" className={styles.title}>
                {a.title}
              </Link>
              <p className={styles.description}>{a.description}</p>
            </div>
            <div className={styles.right}>
              <img src="../../right.svg" className={styles["right-img"]}></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
