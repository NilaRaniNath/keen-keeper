import React, { useContext } from 'react';
import { TimelineContext } from '../../components/context/TimelineContext';

const Timeline = () => {
    const {timeline} = useContext(TimelineContext);
    console.log( timeline)
    return (
        <div>
            Timeline page
        </div>
    );
};

export default Timeline;