import React from 'react'
import Spacer from '../../components/Spacer'
import {
    Center,
    Heading,
    Button,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../constants'

const RandMemberGenScreen = () => {
    const [members, setMembers] = useState([]);

    const [randomName, setRandomName] = useState('');

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

    let weightedMemberArray = [];

    for (const member of members){
        for(let i = 0; i < member.events.length; i++){
            weightedMemberArray.push(member.name);
        }
    }

    const generateMember = () => {
        setRandomName(weightedMemberArray[Math.floor(Math.random() * weightedMemberArray.length)]);
    }

  return (
    <div>
        <Spacer/>
        <Center>
            <Heading>
                Random Member Generator
            </Heading>
        </Center>
        <Center>
            <Button
                mt={4}
                colorScheme='blue'
                onClick={() => generateMember()}
            >
                Generate
            </Button>
        </Center>
        <Spacer></Spacer>
        <Center>
            <Heading>
                {randomName}
            </Heading>
        </Center>
    </div>
  )
}

export default RandMemberGenScreen