import React from "react";
import img from '../../Assets/rose.jpg'
import styles from './Home.module.css'
// import cn from "classnames";

function Home(props) {
  console.warn("props",props);
  return (
    <div>
      <h1>Home Components</h1>
      <div className={[styles.cartWrapper]}>
        <div className={`${styles.imgWrapper} ${styles.item} `}>
           <img src={img} alt="rose" />
        </div>
        <div className={`${styles.textWrapper} ${styles.item}`}>
          <span>Rose </span>
          <span>Price: $10000.00</span>
        </div>
        <div className={`${styles.btnWrapper} ${styles.item}`}>
          <button onClick={()=>{props.addToCartHandler({name:'rose',price:1000})}}>Add To Cart</button>
        </div>
        
          <button onClick={()=>{props.addToCartHandler({name:'rose',price:1000})}}>Add To Cart</button>
        
      </div>
    </div>
  );
}

export default Home;
