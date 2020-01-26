import React from 'react'

export default function Person(props) {
  console.log('props: ', props)
  let { name, id, imageUrl, state } = props

  return(
      <div className="card">
        <img src={imageUrl} alt={name}></img>
        <h3>{name}</h3>
        <p className="fine-print"><i>from</i></p>
        <p>{state}</p>
        <p>{id}</p>
      </div>
  )
}




// return(
//   <div className="card">
//     <img src={props.PersonObj.picture.large} alt={props.PersonObj.name.first}></img>
//     <h3>{props.PersonObj.name.first}</h3>
//     <p className="fine-print"><i>from</i></p>
//     <p>{props.PersonObj.location.state}</p>
//   </div>
// )
