import React from 'react'
import Spacer from '../../components/Spacer'
import { 
  Center, 
  Heading,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Flex,
  Text,
  SimpleGrid
 } from '@chakra-ui/react'
import SearchBar from '../../components/SearchBar'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../constants'
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'

const ElectionEligibilityScreen = () => {
    const [searchName, setSearchName] = useState('');
    const onChange = (e) => setSearchName(e.target.value);

    const [members, setMembers] = useState([]);


    useEffect(()=>{
      fetch(BASE_URL + '/api/members', {
        method: 'GET',
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(json => {setMembers(json); console.log(json)})
      .catch(error => console.error(error));
    }, []);

  return (
    <div>
        <Spacer></Spacer>
        <Center>
            <Heading>
                Election Eligibility
            </Heading>
        </Center>
        <SearchBar name={searchName} onChangeHandler={onChange}/>
        <Spacer/>
        <Center>
            <Card>
            <CardBody>
              <Stack divider={<StackDivider/>} spacing='1'>
                {
                  members.filter(member => member.name.toLowerCase().includes(searchName.toLowerCase())).map((member) => (
                    <Box key={member.id} padding='0.5rem'
                      borderRadius={'0.5rem'}
                      width={'40rem'}>
                      <Flex alignItems={'center'} justifyContent={'space-between'}>
                          <Text>
                          {member.name}
                          </Text>
                          <Box>
                            Events:  
                            {'\t'} 
                            {member.events.length}
                            {'\t'} 
                            {member.events.length >= 1 && <CheckCircleIcon color={'green.500'}/>}
                            {member.events.length < 1 && <WarningIcon color={'red.500'}/>}
                          </Box>
                      </Flex>
                    </Box>
                  ))
                  }
              </Stack>
            </CardBody>
            </Card>
        </Center>
    </div>
  )
}

export default ElectionEligibilityScreen