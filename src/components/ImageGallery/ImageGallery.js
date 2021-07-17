import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import styles from '../../components/ImageGallery/ImageGallery.module.css'


const ImageGallery = ({ images, onImageClick }) => (
    <ul className={styles.imageGallery} onClick={onImageClick}>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
      ))}
    </ul>
  );


ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

export default ImageGallery;