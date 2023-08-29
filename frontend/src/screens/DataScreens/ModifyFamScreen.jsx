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
    Flex,
    useCheckboxGroup,
    Button,
    Text,
    useToast,
} from '@chakra-ui/react'
import Spacer from '../../components/Spacer'
import { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import { BASE_URL } from '../../constants'
import CustomCheckbox from '../../components/CustomCheckbox'

const ModifyFamScreen = () => {

    const toast = useToast();

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

    const { value, getCheckboxProps } = useCheckboxGroup({
        defaultValue: [],
    })

    const submitHandler = () => {
        const data = {
            peopleToAdd: value, 
            fam: fam,
        };
        fetch(BASE_URL + '/api/data/fam', {
            method: 'PUT',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(json => toast({
                    title: json,
                    description: "Reload the page to update another fam",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  }))
          .catch(error => console.error(error));
    }

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
                        <Text>If you want to remove someone from the fam, select 'Not in a Fam'</Text>
                        <Text>The selected people to add are: {value.sort().join(' and ')}</Text>
                        <Center>
                            <Button
                                my={4}
                                colorScheme='blue'
                                onClick={() => submitHandler()}
                            >
                                Submit
                            </Button>
                            </Center>
                        <Center>
                            
                        <CheckboxGroup color={color}>
                            <Stack divider={<StackDivider/>} spacing='1'>
                            {
                                Array.isArray(members) && members.map((member) => (
                                    <Flex key={member._id} direction='row'>
                                        <CustomCheckbox {...getCheckboxProps({color, value:member.name, infam:member.fam===fam ? 1: 0 })}></CustomCheckbox>
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