import React from 'react'
import Spacer from '../components/Spacer'
import {
    Center,
    Heading,
    Button,
} from '@chakra-ui/react'

const RandMemberGenScreen = () => {
  return (
    <div>
        <Spacer/>
        <Center>
            <Heading>
                Random Member Generator
            </Heading>
        </Center>
        <Center>
            <Button
                mt={4}
                colorScheme='blue'
                type='submit'
            >
                Generate
            </Button>
        </Center>
        <Spacer></Spacer>
        <Center>
            <Heading>
                Show name here
            </Heading>
        </Center>
    </div>
  )
}

export default RandMemberGenScreen