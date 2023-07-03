import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

const Loader = () => (
    <div className="loader">
        <ProgressBar
            height={80}
            width={80}
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClassName="progress-bar-wrapper"
            color="#51E5FF"
            secondaryColor="#F4442E"
        />
    </div>
);

export default Loader;
