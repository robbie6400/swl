import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default function ShowDates({shows}) {
  const [APIdata, setAPIdata] = useState([]);

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const currMonth = current.getMonth();
  const currYear = current.getFullYear();

  useEffect(() => {
    axios.get('https://skylershows-9df9.restdb.io/rest/skyler-whitfield-live-shows?&apikey=62d843fb1e03721dd87cd693')
    .then((incomingData) => {
      setAPIdata(incomingData.data)
      console.log(incomingData.data)
    })  
  }, [])

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Table>
          <Table.Body>

            <h3>{monthNames[currMonth]} {currYear}</h3>

            {APIdata.filter((data)=>{
                  return data.MonthNum === currMonth+1
                }).map((data) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} : {data.Time}</Table.Cell>
                    </Table.Row>
                  )
                })}

            <h3>--------------------------------------------------------</h3>
            <h3>{monthNames[currMonth+1]} {currYear}</h3>

            {APIdata.filter((data)=>{
                  return data.MonthNum === currMonth+2
                }).map((data) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                    </Table.Row>
                  )
                })}

            <h3>--------------------------------------------------------</h3>
            <h3>{monthNames[currMonth+2]} {currYear}</h3>

            {APIdata.filter((data)=>{
                  return data.MonthNum === currMonth+3
                }).map((data) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} : {data.Time}</Table.Cell>
                    </Table.Row>
                  )
                })}
          </Table.Body>
        </Table>
      </div>
      <h3>--------------------------------------------------------</h3>
      <br />
    </>
  )
}

