import React from 'react'
import {
    Center,
    InputGroup,
    Input,
    InputLeftElement,
} from '@chakra-ui/react'

const SearchBar = ({onChangeHandler}) => {
  return (
    <div>
        <Center>
            <InputGroup>
                <Input type='text' value={name} onChange={onChangeHandler} />
            </InputGroup>
        </Center>
    </div>
  )
}

export default SearchBar