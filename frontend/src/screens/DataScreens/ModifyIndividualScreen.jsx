import React, { useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import { useState } from 'react'
import Spacer from '../../components/Spacer'
import { 
  Center, 
  Heading, 
  Card, 
  CardHeader, 
  CardBody, 
  Stack, 
  StackDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text
} from '@chakra-ui/react'
import { BASE_URL } from '../../constants'
import ModifyMembers from '../../components/ModifyMembers'
import ModifyIndividualModalForm from '../../components/ModifyIndividualModalForm'


const ModifyIndividualScreen = () => {
    const [searchName, setSearchName] = useState('');
    const onChange = (e) => {setSearchName(e.target.value)};

    const [members, setMembers] = useState([]);

    const [memberThatIsBeingModified, setMemberThatIsBeingModified] = useState({});

    const { isOpen, onOpen, onClose } = useDisclosure();

    const modifyMember = (member) => {
      setMemberThatIsBeingModified(member);
      onOpen();
    };

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
                Modify Individual
            </Heading>
        </Center>
        <SearchBar name={searchName} onChangeHandler={onChange}/>
        <Spacer></Spacer>
        <Center>
            <Card>
            <CardHeader>
                <Heading>
                  Select the member you want to modify
                </Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider/>} spacing='1'>
                {
                  members.filter(member => member.name.toLowerCase().includes(searchName.toLowerCase())).map((member) => (
                    <ModifyMembers key={member._id} member={member} buttonClickHandler={modifyMember}/>
                  ))
                  }
              </Stack>
            </CardBody>
            </Card>
        </Center>


        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Modifying {memberThatIsBeingModified.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ModifyIndividualModalForm member={memberThatIsBeingModified} close={onClose}/>
            </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}

export default ModifyIndividualScreen