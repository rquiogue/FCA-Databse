import React from 'react'
import { useState, useEffect } from 'react'  
import {
    Center,
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Card,
    Input,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useToast,
} from '@chakra-ui/react'
import Spacer from '../../components/Spacer'
import { BASE_URL } from '../../constants'

const SpreadsheetInputScreen = () => {

    const toast = useToast();

    const [eventName, setEventName] = useState('');
    const [isEventNameError, setIsEventNameError] = useState(false);
    const handleEventNameChange = (e) => setEventName(e.target.value);

    const [id, setID] = useState('');
    const [isIDError, setIsIDError] = useState(false);
    const handleIDChange = (e) => setID(e.target.value);

    const [spreadsheetData, setSpreasheetData] = useState([]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSubmit = event => {
        event.preventDefault();
        setIsIDError(id === '');
        setIsEventNameError(eventName === '');

        if (id !== '' && eventName !== ''){
            fetch(BASE_URL + `/api/data/spreadsheet/${id}`,{
                method: 'GET',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(response => response.json())
                .then(json => {console.log(json); setSpreasheetData(json)})
                .catch(error => console.log(error))
            onOpen();
        }
    };

    

    const modalSubmitHandler = event => {
        event.preventDefault();
        const data = {
            eventName,
            spreadsheetID: id,
            numParticipants: spreadsheetData.length,
            spreadsheetData,
        }
        fetch(BASE_URL + `/api/data/spreadsheet`,{
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(json => {
                console.log(json); 
                if (json === 'Event Submitted') {
                    toast({
                        title: json,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                } else {
                    toast({
                        title: json,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    })
                }
            })
            .catch(error => console.log(error))
        onClose();
    }

  return (
    <div>
        <Spacer/>
        <Center>
            <Heading>Spreadsheet Input</Heading>
        </Center>
        <Spacer/>
        <Center>
            <Card padding={'1rem'} width={'20rem'}>
                <form onSubmit={handleSubmit}>
                <FormControl isInvalid={isIDError}>
                    <FormLabel>
                        Event Name
                    </FormLabel>
                    <Input type='text' value={eventName} onChange={handleEventNameChange} />
                    {!isEventNameError ? (
                        <></>
                    ) : (
                        <FormErrorMessage>Event Name is required</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl isInvalid={isIDError}>
                    <FormLabel>
                        Spreadsheet ID
                    </FormLabel>
                    <Input type='text' value={id} onChange={handleIDChange} />
                    {!isIDError ? (
                        <FormHelperText>
                        Enter the spreadsheet ID to input data.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Spreadsheet ID is required</FormErrorMessage>
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

        <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Spreadsheet Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {eventName}
                <br></br>
                Sourcing Data from spreadsheet: {id}
                <br></br>
                <TableContainer overflowY={'auto'} maxHeight={'17.5rem'}>
                    <Table variant={'striped'}>
                        <Thead>
                            <Tr>
                                <Th>
                                    Names
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {spreadsheetData.map((row, i) => <Tr key={row}><Td key={i}>{row[1]}</Td></Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer>
            </ModalBody>

            <ModalFooter>
                <Button variant={'ghost'} mr={3} onClick={onClose}>
                Close
                </Button>
                <Button colorScheme='blue' onClick={modalSubmitHandler}>Submit Data</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
  )
}

export default SpreadsheetInputScreen