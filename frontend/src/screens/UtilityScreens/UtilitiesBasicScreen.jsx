import {
    Card,
    Center,
    Grid,
    Link,
    Box,
    Heading,
    Text
 } from '@chakra-ui/react'
import React from 'react'
import Spacer from '../../components/Spacer'

const UtilitiesBasicScreen = () => {
  return (
    <div>
    <Spacer/>
    <Center>
        <Heading>
            Utilities
        </Heading>
    </Center>
    <Spacer></Spacer>
    <Center>
        <Grid templateColumns={'1fr 1fr'} columnGap='20rem' rowGap={'5rem'}>
            <Card width='30rem' 
                borderRadius={'0.5rem'}
                style={{transition: '0.5s'}} 
                _hover={{
                    cursor: 'pointer',
                    background: 'red.400',
                    color: 'white'
                }}
            >
                <Link href='/utilities/statistics/class' style={{textDecoration: 'none'}}>
                    <Box padding='0.5rem'
                    >
                        <Heading size='md' textTransform='uppercase'>
                            Class statistics    
                        </Heading>
                        <Text pt='2' fontSize='md'>
                            Input a whole spreadsheet from a GBM or other meeting
                        </Text>
                    </Box>
                </Link>
            </Card>
            <Card width={'30rem'} borderRadius={'0.5rem'}
                        style={{transition: '0.5s'}} 
                        _hover={{
                            cursor: 'pointer',
                            background: 'red.400',
                            color: 'white'
                        }}>
                <Link href='/utilities/statistics/fam' style={{textDecoration: 'none'}} >
                    <Box padding='0.5rem'
                        
                    >
                        <Heading size='md' textTransform='uppercase'>
                            Fam Statistics
                        </Heading>
                        <Text pt='2' fontSize='md'>
                            Generates statistics and graphs based on the class
                        </Text>
                    </Box>
                </Link>
            </Card>
            <Card width={'30rem'}
                borderRadius={'0.5rem'}
                style={{transition: '0.5s'}} 
                _hover={{
                    cursor: 'pointer',
                    background: 'red.400',
                    color: 'white'
                }}
            >
                <Link href='/utilities/random-member-generator' style={{textDecoration: 'none'}}>
                    <Box padding='0.5rem'
                    >
                        <Heading size='md' textTransform='uppercase'>
                            Random Member Generator
                        </Heading>
                        <Text pt='2' fontSize='md'>
                            Select a general body member, either randomly or weighted
                        </Text>
                    </Box>
                </Link>
            </Card>
            <Card width={'30rem'}
                borderRadius={'0.5rem'}
                style={{transition: '0.5s'}} 
                _hover={{
                    cursor: 'pointer',
                    background: 'red.400',
                    color: 'white'
                }}    
            >
                <Link href='/utilities/eligibility' style={{textDecoration: 'none'}}>
                    <Box padding='0.5rem'
                    >
                        <Heading size='md' textTransform='uppercase'>
                            Election eligibility
                        </Heading>
                        <Text pt='2' fontSize='md'>
                            See how many meetings members have been to and if they are eligible for voting in the election
                        </Text>
                    </Box>
                </Link>
            </Card>
            <Card width={'30rem'}
                borderRadius={'0.5rem'}
                style={{transition: '0.5s'}} 
                _hover={{
                    cursor: 'pointer',
                    background: 'red.400',
                    color: 'white'
                }}
            >
                <Link href='/utilities/statistics/meeting' style={{textDecoration: 'none'}}>
                    <Box padding='0.5rem'
                    >
                        <Heading size='md' textTransform='uppercase'>
                            Meeting Participation
                        </Heading>
                        <Text pt='2' fontSize='md'>
                            Displays the changes in meeting participation
                        </Text>
                    </Box>
                </Link>
            </Card>
        </Grid>
    </Center>
</div>
  )
}

export default UtilitiesBasicScreen