import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default function AllShows() {
    const [APIdata, setAPIdata] = useState([]);

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December", "January", "February"];
  
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
  
              <h3>{monthNames[0]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 1
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>
              
              <h3>{monthNames[1]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 2
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>

                <h3>{monthNames[2]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 3
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>

              <h3>{monthNames[3]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 4
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>

              <h3>{monthNames[4]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 5
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>
              
              <h3>{monthNames[5]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 6
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>

                <h3>{monthNames[6]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 7
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>

              <h3>{monthNames[7]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 8
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>

              <h3>{monthNames[8]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 9
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>
              
              <h3>{monthNames[9]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 10
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>

                <h3>{monthNames[10]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 11
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>

              <h3>{monthNames[11]} {currYear}</h3>
  
              {APIdata.filter((data)=>{
                    return data.MonthNum === 12
                  }).map((data) => {
                    return (
                      <Table.Row>
                        <Table.Cell>{data.Month} {data.Day} : {data.Place} {data.Guest} {data.City} {data.Time}</Table.Cell>
                      </Table.Row>
                    )
                  })}
  
              <h3>----------------------------------------</h3>
              <br /><br /><br /><br /><br /><br /><br />

            </Table.Body>
          </Table>
        </div>
      </>
    )
  }
  