import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Table, Header } from 'semantic-ui-react';

export default function ShowDates({shows}) {
  const [APIdata, setAPIdata] = useState([]);

  useEffect(() => {
    axios.get('https://sheet.best/api/sheets/8e9ac55e-89e2-491b-b64d-c64c682eb716')
    .then((incomingData) => {
      setAPIdata(incomingData.data)
    })  
  }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Table>
        <Table.Body>
          {APIdata.map((data) => {
            return (
            <Table.Row>
              <Table.Cell>{data.Month} {data.Day} : {data.Place} &#40; {data.Guest} &#41; &#40; {data.City} &#41; : {data.StartTime} - {data.EndTime} </Table.Cell>
            </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

