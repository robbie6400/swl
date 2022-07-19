import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Table, Header } from 'semantic-ui-react';

export default function ShowDates({shows}) {
  const [APIdata, setAPIdata] = useState([]);

  useEffect(() => {
    axios.get('https://skylershows-9df9.restdb.io/media/skyler-whitfield-live-shows?key=62d6bf9d1e03721dd87cd64f')
    .then((incomingData) => {
      // setAPIdata(incomingData.data)
      console.log(incomingData.data)
    })  
  }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Table>
        <Table.Body>
          {APIdata.map((data) => {
            return (
            <Table.Row>
              <Table.Cell>{data.Month} {data.MonthNum} {data.Day} : {data.Place} &#40; {data.Guest} &#41; &#40; {data.City} &#41; : {data.StartTime} - {data.EndTime} </Table.Cell>
            </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

