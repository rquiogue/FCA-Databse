import React from 'react'
import Header from '../components/Header'
import HomeInfoCards from '../components/HomeInfoCards'
import Loader from '../components/Loader'
import Spacer from '../components/Spacer'
import { background, transition, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import {
    Center,
    Grid,
    Card,
    CardHeader,
    Heading,
    Box,
    CardBody,
    Text,
    Link
} from '@chakra-ui/react'
import './HomeScreen.css'

const HomeScreen = () => {
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const headingOnClickHandler = () => {
        toast({
            title: 'Easter Egg unlocked',
            description: "Wait and see",
            status: 'success',
            duration: 100000,
            isClosable: true,
          });  
        setIsLoading(true);
    };

    if (isLoading){
        return (
            <>
                <Header/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Center><Loader></Loader></Center>
            </>
        );
    }


  return (
    <div>
        <Header/>
        <Spacer/>
        <Center>
            <Heading onClick={headingOnClickHandler} padding='1rem' borderRadius={'1rem'} style={{transition: '0.5s'}} _hover={{
                cursor: 'pointer',
                background: 'red.500',
                color: 'white'
            }}>
                FCA DATABASE
            </Heading>
        </Center>
        <Spacer/>
        <HomeInfoCards/>
        <Spacer/>
        <Spacer/>
        <Center>
            <Text>Created by Ryan Quiogue</Text>
        </Center>
    </div>
  )
}

export default HomeScreen