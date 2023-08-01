import React from "react";
import Button from "@material-ui/core/Button";
import { ArrowForwardIosTwoTone } from "@material-ui/icons";
import styles from "./home.module.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className={`${styles.mainContainer} `}>
      <div className={`${styles.container}`}>
        <div className={`${styles.header}`}>
          <h5 style={{ textAlign: "center" }}>
            Increase-Decrease <br /> <span>Bar</span>
          </h5>
          <NavLink to="/bar">
            <Button
              style={{ borderRadius: 16 }}
              variant="contained"
              color="primary"
              startIcon={<ArrowForwardIosTwoTone />}
            ></Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
