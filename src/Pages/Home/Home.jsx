import React from 'react';
import NavigationBar from '../../Shared/NavigationBar';
import useTitle from '../../hooks/useTitle';



const Home = () => {
    useTitle('Home')
    return (
        <div className='m-0 overflow-hidden'>
            <NavigationBar></NavigationBar>
            
        </div>
    );
};

export default Home;