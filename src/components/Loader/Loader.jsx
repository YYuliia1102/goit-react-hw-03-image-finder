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
            color="#751fd1"
            secondaryColor="#dbcc42"
        />
    </div>
);

export default Loader;
