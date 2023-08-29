import React from 'react'
import { 
    useCheckbox,
    chakra,
    Flex,
    Box,
    Text,
} from '@chakra-ui/react';

const CustomCheckbox = (props) => {
  const { color, value, infam } = props;
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props);

  if (infam){
    state.isChecked = true;
  }

  return (
    <chakra.label
      display='flex'
      flexDirection='row'
      alignItems='center'
      gridColumnGap={2}
      width={'full'}
      bg='gray.50'
      border='1px solid'
      borderColor={color}
      rounded='lg'
      px={3}
      py={1}
      cursor='pointer'
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems='center'
        justifyContent='center'
        border='2px solid'
        borderColor={color}
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg={`${color}`} />}
      </Flex>
      <Text color="gray.700" {...getLabelProps()}>{value}</Text>
    </chakra.label>
  )

}

export default CustomCheckbox