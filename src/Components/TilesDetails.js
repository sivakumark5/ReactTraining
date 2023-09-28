import React from 'react';
import img5 from './Tilesimage5.jpg';
import img6 from './Tilesimage6.jpg';
import styles from './Style.module.css'

const handleclick = () => {
    alert('Item added to the Cart');
};

const TilesDetails = () => {
  return (
    <div className={styles.product} >
      <div className={styles.image1}>
        <img src={img5} alt="Image1" height="200" width="250px" id='5'/>
      <div className={styles.productprice}>
       Price: INR 150 per Sq.ft
      </div>
      </div>
<br></br>

      <div className={styles.image2}>
      <img src={img6} alt="Image2" height="200" width="250px" id='6'/>
      <div className={styles.productprice}> 
       Price: INR 200 per Sq.ft
      </div>
      </div>

    </div>
  );
}

export default TilesDetails;

