import React from 'react'
import { useState } from 'react'

import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormHelperText,
    FormErrorMessage,
    Select,
    Flex
} from '@chakra-ui/react'
import { BASE_URL } from '../constants'
import { useToast } from '@chakra-ui/react'

const ModifyIndividualModalForm = ({member, close}) => {
    const id = member._id;

    const toast = useToast();

    const [name, setName] = useState(member.name);
    const [isNameError, setIsNameError] = useState(false);
    const handleNameChange = (e) => setName(e.target.value);

    const [email, setEmail] = useState(member.email);
    const [isEmailError, setIsEmailError] = useState(false);
    const handleEmailChange = (e) => setEmail(e.target.value);

    const [major, setMajor] = useState(member.major);
    const handleMajorChange = (e) => setMajor(e.target.value);

    const [pronouns, setPronouns] = useState(member.pronouns);
    const handlePronounsChange = (e) => setPronouns(e.target.value);

    const [grade, setGrade] = useState(member.grade);
    const [isGradeError, setIsGradeError] = useState(false);
    const handleGradeChange = (e) => setGrade(e.target.value);

    const [fam, setFam] = useState(member.fam);
    const [isFamError, setIsFamError] = useState(false);
    const handleFamChange = (e) => setFam(e.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        setIsNameError(name === '');
        setIsEmailError(email === '');
        setIsGradeError(grade === '');
        setIsFamError(fam === '');
        const updates = {
            id,
            name: name,
            email: email,
            major: major,
            pronouns: pronouns,
            grade: grade,
            fam: fam,
        }
        if (name !== '' && email !== '' && grade !== '' && fam !== ''){
            fetch(BASE_URL + '/api/data/individual',{
                method: 'PUT',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updates),
            })
                .then(response => response.json())
                .then(json => toast({
                    title: json,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  }))
                .catch(error => console.log(error))
        }
        close();
    };


  return (
    <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isNameError}>
            <FormLabel>
                Name
            </FormLabel>
            <Input type='text' value={name} onChange={handleNameChange}/>
            {!isNameError ? (
                <FormHelperText>
                </FormHelperText>
            ) : (
                <FormErrorMessage>Name is required</FormErrorMessage>
            )}
        </FormControl>
        <FormControl isInvalid={isEmailError}>
            <FormLabel>
                Email
            </FormLabel>
            <Input type='email' value={email} onChange={handleEmailChange}/>
            {!isEmailError ? (
                <FormHelperText>
                </FormHelperText>
            ) : (
                <FormErrorMessage>Email is required</FormErrorMessage>
            )}
        </FormControl>
        <FormControl>
            <FormLabel>
                Major
            </FormLabel>
            <Input type='text' value={major} onChange={handleMajorChange} />
        </FormControl>
        <FormControl>
            <FormLabel>
                Pronouns
            </FormLabel>
            <Input type='text' value={pronouns} onChange={handlePronounsChange} />
        </FormControl>
        <FormControl isInvalid={isGradeError}>
            <FormLabel>Grade</FormLabel>
            <Select placeholder='Select grade' onChange={handleGradeChange} value={grade}>
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior+</option>
            </Select>
            {!isGradeError ? (
                <FormHelperText>
                </FormHelperText>
            ) : (
                <FormErrorMessage>Grade is required</FormErrorMessage>
            )}
        </FormControl>
        <FormControl isInvalid={isFamError}>
            <FormLabel>Fam</FormLabel>
            <Select placeholder='Select Fam' onChange={handleFamChange} value={fam}>
                <option>Not in a Fam</option>
                <option>Fam 1🍌</option>
                <option>Fam 2🦙</option>
                <option>Fam 3🔥</option>
                <option>Fam 4🦄</option>
                <option>Fam 5🦊</option>
                <option>Fam 6🐍</option>
            </Select>
            {!isFamError ? (
                <FormHelperText>
                </FormHelperText>
            ) : (
                <FormErrorMessage>Fam is required(There is a no Fam option)</FormErrorMessage>
            )}
        </FormControl>
        <Flex justifyContent={'flex-end'}>
            <Button variant={'ghost'} my={4} mx={3} onClick={() => close()}>
                Close
            </Button>
            <Button
                    my={4}
                    colorScheme='blue'
                    type='submit'
                >
                    Submit
            </Button>
        </Flex>
    </form>
  )
}

export default ModifyIndividualModalForm