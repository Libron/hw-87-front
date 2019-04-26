import React from 'react';

import imageNotAvailable from '../../../assets/images/noimg.png';
import {apiURL} from "../../../constants";

const styles = {
  width: '100px',
  height: '100px',
  marginRight: '10px'
};

const ImageThumbnail = props => {
  let image = imageNotAvailable;

  if (props.image && props.image !== "null") {
    image = apiURL + '/uploads/' + props.image;
  }

  return <img src={image} style={styles} className="img-thumbnail" alt="Post" />;
};

export default ImageThumbnail;
