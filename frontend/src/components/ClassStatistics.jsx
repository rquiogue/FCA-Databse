import React from 'react'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants';
import { Center } from '@chakra-ui/react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ClassStatistics = () => {

    const [members, setMembers] = useState([]);

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

    const freshmanClass = members.filter((member) => member.grade === 'Freshman');
    const sophomoreClass = members.filter((member) => member.grade === 'Sophomore');
    const juniorClass = members.filter((member) => member.grade === 'Junior');
    const seniorClass = members.filter((member) => member.grade === 'Senior+');
    console.log(freshmanClass);
    console.log(sophomoreClass);
    console.log(juniorClass);
    console.log(seniorClass);

    const data = [
        {
          name: 'Freshman',
          "# of people": freshmanClass.length,
        },
        {
          name: 'Sophomore',
          "# of people": sophomoreClass.length,
        },
        {
          name: 'Junior',
          "# of people": juniorClass.length,
        },
        {
          name: 'Senior+',
          "# of people": seniorClass.length,
        },
      ];


  return (
    <Center>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={0}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="# of people" fill="#8884d8" />
        </BarChart>
    </Center>
  )
}

export default ClassStatistics