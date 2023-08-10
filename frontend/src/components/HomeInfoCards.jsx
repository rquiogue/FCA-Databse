import React from 'react'
import {
    Center,
    Grid,
    Card,
    CardHeader,
    Heading,
    Box,
    CardBody,
    Text,
    Link,
    StackDivider,
    Stack
} from '@chakra-ui/react'

const HomeInfoCards = () => {
  return (
    <Center>
            <Grid templateColumns={'1fr 1fr'} gap={'10rem'} marginX={'5rem'}> 
                <Card shadow={'0 0 3px #E53E3E'}>
                    <CardHeader>
                        <Link href='/data' _hover={{color: 'red.500'}}>
                            <Heading size='lg'>Data</Heading>
                        </Link>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            Here we can input, receive and modify data in the database
                        </Text>
                        <Box height='1rem'></Box>
                        <Stack divider={<StackDivider/>} spacing='4'>
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
                            <Heading size='sm' textTransform='uppercase'>
                                Spreadsheet Input
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Input a whole spreadsheet from a GBM or other meeting
                            </Text>
                            </Box>
                            </Link>
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
                            <Heading size='sm' textTransform='uppercase'>
                                Individual Input
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Input an individual's information
                            </Text>
                            </Box>
                            </Link>
                            <Link href='/data/modifify/individual' style={{textDecoration: 'none'}}>
                            <Box padding='0.5rem'
                                borderRadius={'0.5rem'}
                                style={{transition: '0.5s'}} 
                                _hover={{
                                    cursor: 'pointer',
                                    background: 'red.400',
                                    color: 'white'
                                }}
                            >
                            <Heading size='sm' textTransform='uppercase'>
                                Modify individual
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Modify an individual's information
                            </Text>
                            </Box>
                            </Link>
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
                            <Heading size='sm' textTransform='uppercase'>
                                Change Fam Roster
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Add or remove members from a specified fam
                            </Text>
                            </Box>
                            </Link>
                        </Stack>
                    </CardBody>
                </Card>
                <Card shadow={'0 0 3px #E53E3E'}>
                <CardHeader>
                    <Link href='/data' _hover={{color: 'red.500'}}>
                        <Heading size='lg'>Utilities</Heading>
                    </Link>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            Utilities contain several tools that allow us to visualize and work with our data
                        </Text>
                        <Box height='1rem'></Box>
                        <Stack divider={<StackDivider/>} spacing='4'>
                        <Link href='/utilities/statistics/class' style={{textDecoration: 'none'}}>
                            <Box padding='0.5rem'
                                borderRadius={'0.5rem'}
                                style={{transition: '0.5s'}} 
                                _hover={{
                                    cursor: 'pointer',
                                    background: 'red.400',
                                    color: 'white'
                                }}
                            >
                            <Heading size='sm' textTransform='uppercase'>
                                Class statistics
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Generates statistics and graphs based on the class
                            </Text>
                            </Box>
                            </Link>
                            <Link href='/utilities/statistics/fam' style={{textDecoration: 'none'}}>
                            <Box padding='0.5rem'
                                borderRadius={'0.5rem'}
                                style={{transition: '0.5s'}} 
                                _hover={{
                                    cursor: 'pointer',
                                    background: 'red.400',
                                    color: 'white'
                                }}
                            >
                            <Heading size='sm' textTransform='uppercase'>
                                Fam Statistics
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Generates statistics and graphs based on the class
                            </Text>
                            </Box>
                            </Link>
                            <Link href='/utilities/random-member-generator' style={{textDecoration: 'none'}}>
                            <Box padding='0.5rem'
                                borderRadius={'0.5rem'}
                                style={{transition: '0.5s'}} 
                                _hover={{
                                    cursor: 'pointer',
                                    background: 'red.400',
                                    color: 'white'
                                }}
                            >
                            <Heading size='sm' textTransform='uppercase'>
                                Random Member Generator
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Select a general body member, either randomlly or weighted
                            </Text>
                            </Box>
                            </Link>
                            <Link href='/utilities/eligibility' style={{textDecoration: 'none'}}>
                            <Box padding='0.5rem'
                                borderRadius={'0.5rem'}
                                style={{transition: '0.5s'}} 
                                _hover={{
                                    cursor: 'pointer',
                                    background: 'red.400',
                                    color: 'white'
                                }}
                            >
                            <Heading size='sm' textTransform='uppercase'>
                                Election eligibility
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                See how many meetings members have been to and if they are eligible for voting in the election
                            </Text>
                            </Box>
                            </Link>
                            <Link href='/utilities/participation' style={{textDecoration: 'none'}}>
                            <Box padding='0.5rem'
                                borderRadius={'0.5rem'}
                                style={{transition: '0.5s'}} 
                                _hover={{
                                    cursor: 'pointer',
                                    background: 'red.400',
                                    color: 'white'
                                }}
                            >
                            <Heading size='sm' textTransform='uppercase'>
                                Meeting Participation
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Displays the changes in meeting participation
                            </Text>
                            </Box>
                            </Link>
                        </Stack>
                    </CardBody>
                </Card>
            </Grid>
        </Center>
  )
}

export default HomeInfoCards