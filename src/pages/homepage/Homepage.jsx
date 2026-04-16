import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import TabBox from '../../components/Home/TabBox/TabBox';
import Friends from '../../components/Home/friends/Friends';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <TabBox></TabBox>
            <Friends></Friends>
        </>
    );
};

export default Homepage;