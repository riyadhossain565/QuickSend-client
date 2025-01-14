import React from 'react';

const Container = ({children}) => {
    return (
        <div className="max-w-screen-2xl mx-auto xl:px-20 md:px-14 sm:px-2 px-6">
            {children}
        </div>
    );
};

export default Container;