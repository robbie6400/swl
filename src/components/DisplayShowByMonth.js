import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default function DisplayShowByMonth( {monthParam} ) {
  const [APIdata, setAPIdata] = useState([]);

  const monthNames = ["","January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const current = new Date();
  const currMonth = monthParam;
  //const currMonth = 11;
  const currYear = current.getFullYear();
  const currYear0 = currMonth > 12 ? currYear +1 : currYear;
  const currMonth0 = currMonth > 12 ? currMonth-12 : currMonth;


  useEffect(() => {
    axios.get('http://skylershowsn-8b98.restdb.io/rest/showscollection?&apikey=64d3e666a3ea46156b978d02')
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
                  return new Date(data.startDateTime).getMonth()+1 == currMonth0
                }).map((data) => {
              
              const currDate = new Date(data.startDateTime);
              const venueArr = data.VenueID && data.VenueID[0] ? data.VenueID[0] : "";
              const currDisplayDate = dayjs(currDate).format('MMMM D');
              const cityStateDisplay = (venueArr.city == "") ? "" :  "( " + venueArr.city + ", " + venueArr.state + " )";
              const guestDisplay = data.Guest.length >= 1 ?  "( " + data.Guest + " )" : "";
              const enDateDisplay = dayjs(currDate).format('h:mm A') + " - " + dayjs(data.endTime).format('h:mm A');
              const timeDisplay = guestDisplay.includes("National Anthem") ? "": ": " + enDateDisplay;
            
                  return (
                    <Table.Row>
                      <Table.Cell> {currDisplayDate} : {venueArr.place} {guestDisplay} {cityStateDisplay} {timeDisplay}</Table.Cell>
                    </Table.Row>
                  )
                })}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
  