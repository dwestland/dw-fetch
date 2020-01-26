import React, { useState, useEffect } from 'react'
import Person from './Person'

export default function People () {

  const [people, setPeople] = useState([])

  const generateId = () => {
    let id = Math.random().toString(36).substr(2, 9)
    return id
  }

  useEffect(() => {
    const url = 'https://randomuser.me/api/?nat=us&results=10'
    fetch(url)
      .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        setPeople(data.results)
        // setPeople(data.results)
      })
  }, [])

  console.log('people: ', people)

  return(
    <div>
      <h1>People</h1>
      <div className="people-container">
        {people.map(person => {
          return (
            <Person
              imageUrl={person.picture.large}
              key={generateId()}
              name={person.name.first}
              state={person.location.state}
              id={generateId()}
            />
          )
        })}
      </div>
    </div>
  )
}
