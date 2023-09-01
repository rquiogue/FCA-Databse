import React from 'react'
import { useParams } from 'react-router'
import Spacer from '../../components/Spacer';
import { Center, Heading } from '@chakra-ui/react';
import ClassStatistics from '../../components/ClassStatistics';
import FamStatistics from '../../components/FamStatistics';
import MeetingStatistics from '../../components/MeetingStatistics';

const StatisticsScreen = () => {
    const {filter} = useParams();

    const filterFormatted = filter.charAt(0).toUpperCase() + filter.slice(1);

  return (
    <div>
        <Spacer/>
        <Center>
            <Heading>
                {filterFormatted} Statistics
            </Heading>
        </Center>
        <Spacer></Spacer>
        {filter === 'class' && <ClassStatistics/>}
        {filter === 'fam' && <FamStatistics/>}
        {filter === 'meeting' && <MeetingStatistics/>}
    </div>
  )
}

export default StatisticsScreen