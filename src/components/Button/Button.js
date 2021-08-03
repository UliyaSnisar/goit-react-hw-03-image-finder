import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={styles.buttonConteiner}>
      <button className={styles.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
