import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, alt }) => {
  return <img src={url} alt={alt} className={styles.ImageGalleryItemImage} />;
};

export default ImageGalleryItem;
