import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default function ShowDates({shows}) {
  const [APIdata, setAPIdata] = useState([]);

  useEffect(() => {
    axios.get('https://sheet.best/api/sheets/33e25406-953e-4ecd-b6cb-91cfc124b90f')
    .then((incomingData) => {
      setAPIdata(incomingData.data)
      //console.log(incomingData.data)
    })  
  }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Table>
        <Table.Body>
          {APIdata.map((data) => {
            return (
            <Table.Row>
              <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} &#40; {data.City} &#41; : {data.StartTime} - {data.EndTime} </Table.Cell>
            </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

