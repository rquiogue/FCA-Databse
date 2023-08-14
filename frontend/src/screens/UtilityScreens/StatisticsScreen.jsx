import React from 'react'
import { useParams } from 'react-router'
import Spacer from '../../components/Spacer';
import { Center, Heading } from '@chakra-ui/react';

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
        <Center>
            <Heading>
                Data Visualization here
            </Heading>
        </Center>
    </div>
  )
}

export default StatisticsScreen