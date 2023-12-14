import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default function ShowDates({shows}) {
  const [APIdata, setAPIdata] = useState([]);

  const monthNames = ["","January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const currMonth = current.getMonth()+1;
  //const currMonth = 11;
  const currYear = current.getFullYear();
  
  const currYear0 = currMonth > 12 ? currYear +1 : currYear;
  const currYear1 = currMonth+1 > 12 ? currYear +1 : currYear;
  const currYear2 = currMonth+2 > 12 ? currYear +1 : currYear;

  const currMonth0 = currMonth > 12 ? currMonth-12 : currMonth;
  const currMonth1 = currMonth+1 > 12 ? currMonth+1-12 : currMonth+1;
  const currMonth2 = currMonth+2 > 12 ? currMonth+2-12 : currMonth+2;

  useEffect(() => {
    axios.get('https://skylershows-dce3.restdb.io/rest/skyler-whitfield-live-shows?&apikey=63a290def43a573dae095661')
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

          <h3>{monthNames[currMonth0]} {currYear0}</h3>
            
            {APIdata.filter((data)=>{
                  return data.MonthNum == currMonth0 && data.Year == currYear0
                }).map((data) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                    </Table.Row>
                  )
                })}

            <h3>----------------------------------------</h3>
            <h3>{monthNames[currMonth1]} {currYear1}</h3>

              {APIdata.filter((data)=>{
                    return data.MonthNum == currMonth1 && data.Year == currYear1
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}

            <h3>----------------------------------------</h3>
            <h3>{monthNames[currMonth2]} {currYear2}</h3>
            
                {APIdata.filter((data)=>{
                  return data.MonthNum == currMonth2 && data.Year == currYear2
                }).map((data) => {
                  return (
                    <Table.Row>
                      <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                    </Table.Row>
                  )
                })}

          </Table.Body>
        </Table>
      </div>
    </>
  )
}

