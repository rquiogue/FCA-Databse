import React from 'react'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants';
import { Center } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MeetingStatistics = () => {

  const [events, setEvents] = useState([]);

    useEffect(()=>{
        fetch(BASE_URL + '/api/events', {
          method: 'GET',
          mode: "cors",
          headers: {
              "Content-Type": "application/json",
          },
        })
        .then(response => response.json())
        .then(json => {setEvents(json); console.log(json)})
        .catch(error => console.error(error));
  
    }, []);

    const data = events.map((event) => {return {name: event.eventName, 'Participation': event.numParticipants};});

  return (
    <Center>
      <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Participation" stroke="#DD614A" activeDot={{ r: 8 }} />
        </LineChart>
    </Center>
  )
}

export default MeetingStatistics