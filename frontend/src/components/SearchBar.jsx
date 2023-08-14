import React from 'react'
import {
    Center,
    InputGroup,
    Input,
    InputLeftElement,
    Card,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Spacer from './Spacer'

const SearchBar = ({onChangeHandler, name}) => {
  return (
    <div>
        <Spacer></Spacer>
        <Center>
            <Card>
                <InputGroup>
                <InputLeftElement><SearchIcon/></InputLeftElement>
                    <Input type='text' value={name} onChange={onChangeHandler} />
                </InputGroup>
            </Card>
        </Center>
    </div>
  )
}

export default SearchBar