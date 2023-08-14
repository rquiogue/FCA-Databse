import React from 'react'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'
import Spacer from '../components/Spacer'
import { Center, Heading } from '@chakra-ui/react'

const ModifyIndividualScreen = () => {
    const [searchName, setSearchName] = useState('');

    const onChange = (e) => setSearchName(e.target.value);

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
            
        </Center>
    </div>
  )
}

export default ModifyIndividualScreen