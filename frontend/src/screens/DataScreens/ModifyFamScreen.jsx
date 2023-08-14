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
} from '@chakra-ui/react'
import Spacer from '../../components/Spacer'
import { useState } from 'react'

const ModifyFamScreen = () => {
    const [fam, setFam] = useState('');
    const handleFamChange = (e) => setFam(e.target.value);

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
        <Spacer/>
        <Center>
            <Heading>
                {fam}
            </Heading>
        </Center>
    </div>
  )
}

export default ModifyFamScreen