import React from "react";

import infinityGif from '../../assets/images/infinity.gif';

const Loader = () => {
    return (
        <div className="loader">
            <img src={infinityGif} alt="preloader..." />
        </div>
    );
}

export default Loader;