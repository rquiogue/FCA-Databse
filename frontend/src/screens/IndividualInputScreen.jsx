import React from 'react'
import Spacer from '../components/Spacer'
import { useState } from 'react'
import {
    Center,
    Heading,
    Card,
    FormControl,
    FormLabel,
    Input,
    Button,
    FormHelperText,
    FormErrorMessage,
    useDisclosure,
    Select
} from '@chakra-ui/react'

const IndividualInputScreen = () => {
    const table = ['aasdad', 'asdasd', 'asgasfg', 'dfgjdf', 'aasdwqerqwerad', 'asdwqerqweraasd', 'cvzxcv', 'asdxzcvfeasd', 'adfghsadsasdad', 'aasdfasfcsdasd', 'aasasdfasfdad', 'asdcsxcsacasd',]

    const [name, setName] = useState('');
    const [isNameError, setIsNameError] = useState(false);
    const handleNameChange = (e) => setName(e.target.value);

    const [email, setEmail] = useState('');
    const [isEmailError, setIsEmailError] = useState(false);
    const handleEmailChange = (e) => setEmail(e.target.value);

    const [major, setMajor] = useState('');
    const handleMajorChange = (e) => setMajor(e.target.value);

    const [pronouns, setPronouns] = useState('');
    const handlePronounsChange = (e) => setPronouns(e.target.value);

    const [grade, setGrade] = useState('');
    const [isGradeError, setIsGradeError] = useState(false);
    const handleGradeChange = (e) => setGrade(e.target.value);

    const [fam, setFam] = useState('');
    const [isFamError, setIsFamError] = useState(false);
    const handleFamChange = (e) => setFam(e.target.value);

    const [spreadsheetData, setSpreasheetData] = useState([]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSubmit = event => {
        event.preventDefault();
        setIsNameError(name === '');
        setIsEmailError(email === '');
        setIsGradeError(grade === '');
        setIsFamError(fam === '');
        if (name !== '' && email !== ''){
            onOpen();
        }
    };

    const modalSubmitHandler = () => {
        console.log("Submitted form");
        onClose();
    }


  return (
    <div>
        <Spacer/>
        <Center>
            <Heading>Individual Input</Heading>
        </Center>
        <Center>
            <Card padding={'1rem'} width={'20rem'}>
                <form onSubmit={handleSubmit}>
                <FormControl isInvalid={isNameError}>
                    <FormLabel>
                        Name
                    </FormLabel>
                    <Input type='text' value={name} onChange={handleNameChange} />
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
                    <Input type='email' value={email} onChange={handleEmailChange} />
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
                    <Select placeholder='Select grade' onChange={handleGradeChange}>
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
                    <Select placeholder='Select Fam' onChange={handleFamChange}>
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
                <Button
                        mt={4}
                        colorScheme='blue'
                        type='submit'
                    >
                        Submit
                    </Button>
                </form>
            </Card>
        </Center>
    </div>
  )
}

export default IndividualInputScreen