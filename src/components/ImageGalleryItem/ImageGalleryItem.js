import React from 'react'; 
import PropTypes from "prop-types";
import defaultImage from '../../Images/default.jpeg';
import styles from '../../components/ImageGalleryItem/ImageGalleryItem.module.css'

const ImageGalleryItem = ({ src, alt }) => (
    <li className={styles.galleryItem}>
      <img 
        src={src} 
        alt={alt} 
        className={styles.galleryImage} />
    </li>
  );

  ImageGalleryItem.defaultProps = {
    src: defaultImage,
    alt: "No images to show",
  };
  
  ImageGalleryItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
  };
  
  export default ImageGalleryItem;
 