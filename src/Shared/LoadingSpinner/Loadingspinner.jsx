import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loadingspinner = ({smallHeight}) => {
    return (
        <div
        className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
        flex 
        flex-col 
        justify-center 
        items-center `}
        >
            <MoonLoader size={100} color={"#35e1d1"}/>
        </div>
    );
};

export default Loadingspinner;