import React from 'react';
import ListColors from '../listColors/index';
// import SpacingGrid from '../grid/index';
import Layout from '../Layout/index';

const Home = () => {
    return (
        // <div className='home'>
        //     <ListColors/>
        //     <br />
        //     <SpacingGrid />
        // </div>   
        <Layout>
            <ListColors />
        </Layout>
    )
}

export default Home;
