import React from 'react'
import Shows from './Show'

export default function ShowDates({shows}) {
  return (
    shows.map(shows => {
      return <Shows shows={shows} />
    })
  )
}

