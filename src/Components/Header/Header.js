import React from "react";
import styles from '../Home/Home.module.css'
// import cn from "classnames";

function Header(props) {
  console.warn("props",props);
  return (
    <div>
      <div className={`${styles.addToCart}`}>
      <span className={`${styles.cartCount}`} >{props.data}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="cart"/>
      </div>
    </div>
  );
}

export default Header;
