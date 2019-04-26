import React from 'react';

import imageNotAvailable from '../../../assets/images/noimg.png';
import {apiURL} from "../../../constants";

const ImageThumbnail = props => {
  let image = imageNotAvailable;

  if (props.image) {
    image = apiURL + '/uploads/' + props.image;
  }

  return <img src={image} style={props.style} className="img-thumbnail" alt="Post" />;
};

export default ImageThumbnail;
