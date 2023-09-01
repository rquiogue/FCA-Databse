import React from 'react'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants';
import { Center } from '@chakra-ui/react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FamStatistics = () => {
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

    const fam1 = members.filter((member) => member.fam === 'Fam 1🍌');
    const fam2 = members.filter((member) => member.fam === 'Fam 2🦙');
    const fam3 = members.filter((member) => member.fam === 'Fam 3🔥');
    const fam4 = members.filter((member) => member.fam === 'Fam 4🦄');
    const fam5 = members.filter((member) => member.fam === 'Fam 5🦊');
    const fam6 = members.filter((member) => member.fam === 'Fam 6🐍');

    const data = [
        {
          name: 'Fam 1🍌',
          "# of people": fam1.length,
        },
        {
          name: 'Fam 2🦙',
          "# of people": fam2.length,
        },
        {
          name: 'Fam 3🔥',
          "# of people": fam3.length,
        },
        {
          name: 'Fam 4🦄',
          "# of people": fam4.length,
        },
        {
          name: 'Fam 5🦊',
          "# of people": fam5.length,
        },
        {
          name: 'Fam 6🐍',
          "# of people": fam6.length,
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
          <Bar dataKey="# of people" barSize={50} fill="#949494" />
        </BarChart>
    </Center>
  )
}

export default FamStatistics