import React from "react";

import infinityGif from '../../assets/images/infinity.svg';

const Loader = () => {
    return (
        <div className="loader">
            <img src={infinityGif} alt="preloader..." />
        </div>
    );
}

export default Loader;