import React from 'react'
import ShowForm from "../components/ShowForm";


export default function Home() {

  const current = new Date();
  const currMonth = current.getMonth();

  return (
    <div>
        <ShowForm />
        <br />
    </div>
  )
}
