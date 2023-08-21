import React from 'react'
import {
    Box,
    Button,
    Flex,
    Text,
} from '@chakra-ui/react'

const ModifyMembers = ({member, buttonClickHandler}) => {
  return (
    <Box key={member.id} padding='0.5rem'
    borderRadius={'0.5rem'}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text>
        {member.name}
        </Text>

      <Button onClick={() => buttonClickHandler(member)}>
        Modify
      </Button>
    </Flex>
    </Box>
  )
}

export default ModifyMembers