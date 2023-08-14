import React from 'react'
import Spacer from '../components/Spacer'
import { Center, Heading } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'

const ElectionEligibilityScreen = () => {
    const [searchName, setSearchName] = useState('');

    const onChange = (e) => setSearchName(e.target.value);

  return (
    <div>
        <Spacer></Spacer>
        <Center>
            <Heading>
                Election Eligibility
            </Heading>
        </Center>
        <SearchBar name={searchName} onChangeHandler={onChange}/>
    </div>
  )
}

export default ElectionEligibilityScreen