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

const DataBasicScreen = () => {
  return (
    <div>
        <Spacer/>
        <Center>
            <Heading>
                DATA
            </Heading>
        </Center>
        <Spacer></Spacer>
        <Center>
            <Grid templateColumns={'1fr 1fr'} columnGap='20rem' rowGap={'5rem'}>
                <Card width='30rem' >
                    <Link href='/data/spreadsheet' style={{textDecoration: 'none'}}>
                        <Box padding='0.5rem'
                            borderRadius={'0.5rem'}
                            style={{transition: '0.5s'}} 
                            _hover={{
                                cursor: 'pointer',
                                background: 'red.400',
                                color: 'white'
                            }}
                        >
                            <Heading size='md' textTransform='uppercase'>
                                Spreadsheet Input
                            </Heading>
                            <Text pt='2' fontSize='md'>
                                Input a whole spreadsheet from a GBM or other meeting
                            </Text>
                        </Box>
                    </Link>
                </Card>
                <Card width={'30rem'}>
                    <Link href='/data/individual' style={{textDecoration: 'none'}}>
                        <Box padding='0.5rem'
                            borderRadius={'0.5rem'}
                            style={{transition: '0.5s'}} 
                            _hover={{
                                cursor: 'pointer',
                                background: 'red.400',
                                color: 'white'
                            }}
                        >
                            <Heading size='md' textTransform='uppercase'>
                                Individual Input
                            </Heading>
                            <Text pt='2' fontSize='md'>
                                Input an individual's information
                            </Text>
                        </Box>
                    </Link>
                </Card>
                <Card width={'30rem'}>
                    <Link href='/data/modify/individual' style={{textDecoration: 'none'}}>
                        <Box padding='0.5rem'
                            borderRadius={'0.5rem'}
                            style={{transition: '0.5s'}} 
                            _hover={{
                                cursor: 'pointer',
                                background: 'red.400',
                                color: 'white'
                            }}
                        >
                            <Heading size='md' textTransform='uppercase'>
                                Modify individual
                            </Heading>
                            <Text pt='2' fontSize='md'>
                                Modify an individual's information
                            </Text>
                        </Box>
                    </Link>
                </Card>
                <Card width={'30rem'}>
                    <Link href='/data/modify/fam' style={{textDecoration: 'none'}}>
                        <Box padding='0.5rem'
                            borderRadius={'0.5rem'}
                            style={{transition: '0.5s'}} 
                            _hover={{
                                cursor: 'pointer',
                                background: 'red.400',
                                color: 'white'
                            }}
                        >
                            <Heading size='md' textTransform='uppercase'>
                                Change Fam Roster
                            </Heading>
                            <Text pt='2' fontSize='md'>
                                Add or remove members from a specified fam
                            </Text>
                        </Box>
                    </Link>
                </Card>
            </Grid>
        </Center>
    </div>
  )
}

export default DataBasicScreen