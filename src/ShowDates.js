import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default function ShowDates({shows}) {
  const [APIdata, setAPIdata] = useState([]);

  useEffect(() => {
    axios.get('https://skylershows-9df9.restdb.io/rest/skyler-whitfield-live-shows?&apikey=62d843fb1e03721dd87cd693')
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
                <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} &#40; {data.City} &#41; : {data.StartTime} - {data.EndTime} </Table.Cell><br />
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

