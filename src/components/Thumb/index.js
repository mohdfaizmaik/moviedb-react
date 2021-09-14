import React from 'react';

import { Image } from './Thumb.style';

const Thumb = ({image,movieId,clickable}) => (
    <div>
        <Image src= {image} alt="thumb image"/>
    </div>
);

export default Thumb;