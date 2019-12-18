import React from 'react';
import loadSrc from '../../assets/loader.gif';


const Loader = props => (
    <div>
        <img
            style={{ width: 75 }}
            alt='loading'
            src={loadSrc}/>
    </div>
);

export default Loader;