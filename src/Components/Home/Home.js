import React from "react";
import img from '../../Assets/rose.jpg'
import styles from './Home.module.css'
// import cn from "classnames";

function Home(props) {
  console.warn("props",props);
  return (
    <div>
      <div className={`${styles.addToCart}`}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
      <h1>Home Components</h1>
      <div className={[styles.cartWrapper]}>
        <div className={`${styles.imgWrapper} ${styles.item} `}>
           <img src={img} alt="image" />
        </div>
        <div className={`${styles.textWrapper} ${styles.item}`}>
          <span>Rose </span>
          <span>Price: $10000.00</span>
        </div>
        <div className={`${styles.btnWrapper} ${styles.item}`}>
          <button onClick={()=>{props.addToCartHandler({name:'rose',price:'1000'})}}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
