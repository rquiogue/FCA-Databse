import React from 'react'
import {
    Center,
    FormControl,
    Heading,
    FormLabel,
    Select,
    FormHelperText,
    FormErrorMessage,
    Card,
    CardHeader,
    CardBody,
    Stack,
    StackDivider,
    Checkbox, 
    CheckboxGroup,
    Flex
} from '@chakra-ui/react'
import Spacer from '../../components/Spacer'
import { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import { BASE_URL } from '../../constants'
import CustomCheckbox from '../../components/CustomCheckbox'

const ModifyFamScreen = () => {
    const [fam, setFam] = useState('');
    const handleFamChange = (e) => {
        setFam(e.target.value);
        switch(e.target.value) {
            case 'Not in a Fam':
              setColor('gray.400');
              break;
            case 'Fam 1🍌':
                setColor('yellow.400');
              break;
            case 'Fam 2🦙':
                setColor('blue.400');
            break;
            case 'Fam 3🔥':
                setColor('red.500');
            break;
            case 'Fam 4🦄':
                setColor('purple.500');
            break;
            case 'Fam 5🦊':
                setColor('orange.400');
            break;
            case 'Fam 6🐍':
                setColor('green.400');
            break;
            default:
              // code block
          }
        console.log(color);
    }

    const [searchName, setSearchName] = useState('');
    const onChange = (e) => {
        setSearchName(e.target.value);   
    };

    const [color, setColor] = useState('gray.400');


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
        <Spacer/>
        <Center>
            <Heading>
                Change Fam Roster
            </Heading>
        </Center>
        <Spacer/>
        <Center>
            <Card padding={'1rem'} width={'20rem'}>
                <form>
                    <FormControl>
                        <FormLabel>Fam</FormLabel>
                        <Select placeholder='Select Fam' onChange={handleFamChange}>
                            <option>Not in a Fam</option>
                            <option>Fam 1🍌</option>
                            <option>Fam 2🦙</option>
                            <option>Fam 3🔥</option>
                            <option>Fam 4🦄</option>
                            <option>Fam 5🦊</option>
                            <option>Fam 6🐍</option>
                        </Select>
                    </FormControl>
                </form>
            </Card>
        </Center>
        { fam !== '' && 
            <>
            <Spacer/>
            <Center>
                <Card>
                    <CardHeader>
                        <Heading>
                        Select the members you want to add to {fam}
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <Center>
                        <CheckboxGroup color={color}>
                            <Stack divider={<StackDivider/>} spacing='1'>
                            {
                                members.filter(member => member.name.toLowerCase().includes(searchName.toLowerCase())).map((member) => (
                                    <Flex direction='row'>
                                        <CustomCheckbox color={color} name={member.name} currentlyInFam={member.fam === fam}></CustomCheckbox>
                                    </Flex>
                                ))
                            }
                            </Stack>
                        </CheckboxGroup>
                        </Center>
                    </CardBody>
                </Card>
            </Center>
            </>
        }
        
    </div>
  )
}

export default ModifyFamScreen