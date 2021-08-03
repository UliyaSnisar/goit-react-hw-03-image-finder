import React from 'react';
import Loader from 'react-loader-spinner';

const Spiner = () => {
  return (
    <div>
      <Loader
        type="Circles"
        color="#00BFFF"
        margin="auto"
        height={100}
        width={100}
      />
    </div>
  );
};
export default Spiner;
