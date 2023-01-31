import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.chicago}>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link className="button" to={""}>
          Reserve a table
        </Link>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
}

export default Home;
